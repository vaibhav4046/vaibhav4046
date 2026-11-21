// Rebuilds the auto-generated parts of README.md from live GitHub data.
// Hand-written sections are left alone; only text between
// <!-- auto:NAME:start --> and <!-- auto:NAME:end --> markers is replaced.
//
// Usage: GITHUB_TOKEN=... node scripts/update-profile.mjs [--check]
//   --check  print the result to stdout instead of writing README.md
// Opt a repo out of "Latest work" with the topic `profile-hide`.
// Override a PR's title with scripts/pr-notes.json: { "<pr url>": "text" }.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const USER = process.env.PROFILE_USER || 'vaibhav4046'
const TOKEN = process.env.GITHUB_TOKEN
const README = new URL('../README.md', import.meta.url)
const NOTES = new URL('./pr-notes.json', import.meta.url)
const LATEST_COUNT = 8
const TITLE_MAX = 90

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
    },
  })
  if (!res.ok) throw new Error(`GitHub ${res.status} on ${path}: ${await res.text()}`)
  return res.json()
}

async function searchAll(q) {
  const items = []
  for (let page = 1; page <= 10; page++) {
    const r = await gh(`/search/issues?q=${encodeURIComponent(q)}&per_page=100&page=${page}`)
    items.push(...r.items)
    if (items.length >= r.total_count || r.items.length === 0) break
  }
  return items
}

const repoOf = (item) => item.repository_url.replace('https://api.github.com/repos/', '')
const esc = (s) => String(s).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')
const clip = (s, n) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s)
const stars = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n))
const day = (iso) => iso.slice(0, 10)

export function replaceBlock(text, name, body) {
  const start = `<!-- auto:${name}:start -->`
  const end = `<!-- auto:${name}:end -->`
  const i = text.indexOf(start)
  const j = text.indexOf(end)
  if (i === -1 || j === -1 || j < i) throw new Error(`README is missing the auto:${name} markers`)
  return `${text.slice(0, i + start.length)}\n${body.trim()}\n${text.slice(j)}`
}

async function upstream() {
  const notes = existsSync(NOTES) ? JSON.parse(readFileSync(NOTES, 'utf8')) : {}
  const external = (q) => searchAll(q).then((xs) => xs.filter((x) => !repoOf(x).startsWith(`${USER}/`)))
  const [merged, open] = await Promise.all([
    external(`is:pr author:${USER} is:merged -user:${USER}`),
    external(`is:pr author:${USER} is:open -user:${USER}`),
  ])

  const byRepo = new Map()
  for (const pr of merged) {
    const name = repoOf(pr)
    if (!byRepo.has(name)) byRepo.set(name, [])
    byRepo.get(name).push(pr)
  }
  const repos = await Promise.all(
    [...byRepo.keys()].map(async (name) => {
      const r = await gh(`/repos/${name}`)
      return { name, stars: r.stargazers_count, description: r.description || '', prs: byRepo.get(name) }
    }),
  )
  repos.sort((a, b) => b.stars - a.stars || b.prs.length - a.prs.length)

  // Count PRs whose diff touches a test file: the cheapest honest quality signal.
  let withTests = 0
  await Promise.all(
    merged.map(async (pr) => {
      const files = await gh(`/repos/${repoOf(pr)}/pulls/${pr.number}/files?per_page=100`)
      if (files.some((f) => /(^|\/)(tests?|__tests__|spec)(\/|$)|[._-](test|spec)\.|_test\.go$/i.test(f.filename))) withTests++
    }),
  )

  const rows = repos.map((r) => {
    const prs = r.prs
      .sort((a, b) => b.closed_at.localeCompare(a.closed_at))
      .map((pr) => `[#${pr.number}](${pr.html_url}) ${esc(clip(notes[pr.html_url] || pr.title, TITLE_MAX))}`)
      .join(' · ')
    const desc = r.description ? ` — ${esc(clip(r.description, 70))}` : ''
    return `| [**${r.name}**](https://github.com/${r.name})${desc} | ${r.stars ? stars(r.stars) : '—'} | ${prs} |`
  })

  const table = [
    '| Project | ★ | Merged work |',
    '| --- | --- | --- |',
    ...rows,
  ].join('\n')
  const tail = open.length
    ? `\n\nIn review upstream right now: ${open.length} pull request${open.length === 1 ? '' : 's'} (${[...new Set(open.map(repoOf))].join(', ')}).`
    : ''
  return {
    count: merged.length,
    repoCount: repos.length,
    withTests,
    table: table + tail,
    topStars: repos[0]?.stars ?? 0,
    topName: repos[0]?.name ?? '',
  }
}

async function latest() {
  const repos = await gh(`/users/${USER}/repos?type=owner&sort=created&direction=desc&per_page=100`)
  const picked = repos
    .filter((r) => !r.fork && !r.archived && !r.private && r.name !== USER && r.description)
    .filter((r) => !(r.topics || []).includes('profile-hide'))
    .slice(0, LATEST_COUNT)
  const rows = picked.map((r) => {
    const links = [r.homepage ? `[Live](${r.homepage.startsWith('http') ? r.homepage : `https://${r.homepage}`})` : null, `[Source](${r.html_url})`]
      .filter(Boolean)
      .join(' · ')
    return `| **${esc(r.name)}** | ${esc(clip(r.description, 140))} | ${day(r.created_at)} | ${links} |`
  })
  return ['| Project | What it is | Started | Links |', '| --- | --- | --- | --- |', ...rows].join('\n')
}

export async function build(readme) {
  const [oss, recent] = await Promise.all([upstream(), latest()])
  let out = readme
  out = replaceBlock(
    out,
    'badge',
    `<img src="https://img.shields.io/badge/Upstream-${oss.count}%20merged%20PRs-2ea44f?style=for-the-badge&logo=github" alt="${oss.count} merged upstream pull requests">`,
  )
  out = replaceBlock(
    out,
    'summary',
    `- **I land work in codebases I did not write.** ${oss.count} merged pull requests in ${oss.repoCount} upstream repositories, including ${oss.topName} (${stars(oss.topStars)}★). ${oss.withTests} of the ${oss.count} add or change tests.`,
  )
  out = replaceBlock(out, 'oss', oss.table)
  out = replaceBlock(out, 'latest', `${recent}\n\n<sub>This table and the open-source table update themselves from GitHub every 6 hours.</sub>`)
  return out
}

function selfCheck() {
  const t = 'a\n<!-- auto:x:start -->\nold\n<!-- auto:x:end -->\nb'
  const r = replaceBlock(t, 'x', 'new')
  if (r !== 'a\n<!-- auto:x:start -->\nnew\n<!-- auto:x:end -->\nb') throw new Error('replaceBlock self-check failed')
  let threw = false
  try { replaceBlock('no markers', 'x', 'y') } catch { threw = true }
  if (!threw) throw new Error('replaceBlock must refuse a README without markers')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  selfCheck()
  const before = readFileSync(README, 'utf8')
  const after = await build(before)
  if (process.argv.includes('--check')) process.stdout.write(after)
  else if (after !== before) {
    writeFileSync(README, after)
    console.log('README.md updated')
  } else console.log('README.md already current')
}
