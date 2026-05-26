// Render sleek custom hero cards for projects without live web deployments.
// Each card matches the portfolio aesthetic: dark gradient bg, big serif/mono
// brand title, tagline, monochrome tech-tag badges.
//
// Renders HTML strings via Playwright and screenshots them at 1440×810. Saves
// PNGs directly into ../profile-readme/images/ overwriting the GitHub-repo
// fallback screenshots.

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "..", "profile-readme", "images");
await mkdir(out, { recursive: true });

function card({ title, tagline, accent, tags, hero, bg }) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
  :root { --bg: ${bg}; --accent: ${accent}; --fg: #f4f1de; --muted: #8b949e; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); color: var(--fg); font-family: 'JetBrains Mono', 'SF Mono', ui-monospace, monospace; }
  body { width: 1440px; height: 810px; overflow: hidden; position: relative; }
  .glow { position: absolute; inset: 0; background: radial-gradient(circle at 70% 30%, ${accent}33 0%, transparent 55%); pointer-events: none; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(${accent}10 1px, transparent 1px), linear-gradient(90deg, ${accent}10 1px, transparent 1px); background-size: 48px 48px; opacity: 0.4; }
  .container { position: relative; height: 100%; padding: 80px 100px; display: flex; flex-direction: column; justify-content: space-between; z-index: 2; }
  .header { display: flex; align-items: center; gap: 16px; font-size: 14px; letter-spacing: 0.18em; color: ${accent}; text-transform: uppercase; }
  .dot { width: 10px; height: 10px; background: ${accent}; border-radius: 999px; box-shadow: 0 0 18px ${accent}; }
  .hero { display: flex; flex-direction: column; gap: 28px; max-width: 1100px; }
  h1 { font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-weight: 700; font-size: 132px; line-height: 0.95; margin: 0; letter-spacing: -0.02em; }
  h1 .accent { color: ${accent}; }
  .tagline { font-size: 28px; color: var(--muted); max-width: 880px; line-height: 1.35; font-family: 'JetBrains Mono', monospace; }
  .tagline .em { color: var(--fg); font-style: italic; }
  .footer { display: flex; justify-content: space-between; align-items: flex-end; }
  .tags { display: flex; gap: 12px; flex-wrap: wrap; }
  .tag { padding: 8px 18px; background: rgba(255,255,255,0.05); border: 1px solid ${accent}40; color: var(--fg); font-size: 14px; letter-spacing: 0.04em; border-radius: 0; }
  .brand { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--muted); letter-spacing: 0.18em; text-transform: uppercase; }
  .brand .who { color: ${accent}; }
  .corner { position: absolute; width: 24px; height: 24px; border-color: ${accent}; }
  .corner.tl { top: 36px; left: 36px; border-top: 2px solid; border-left: 2px solid; }
  .corner.tr { top: 36px; right: 36px; border-top: 2px solid; border-right: 2px solid; }
  .corner.bl { bottom: 36px; left: 36px; border-bottom: 2px solid; border-left: 2px solid; }
  .corner.br { bottom: 36px; right: 36px; border-bottom: 2px solid; border-right: 2px solid; }
</style></head><body>
  <div class="glow"></div>
  <div class="grid"></div>
  <span class="corner tl"></span><span class="corner tr"></span>
  <span class="corner bl"></span><span class="corner br"></span>
  <div class="container">
    <div class="header"><span class="dot"></span><span>${hero}</span></div>
    <div class="hero">
      <h1>${title}</h1>
      <p class="tagline">${tagline}</p>
    </div>
    <div class="footer">
      <div class="tags">
        ${tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="brand"><span class="who">github.com/vaibhav4046</span></div>
    </div>
  </div>
</body></html>`;
}

const cards = [
  {
    file: "scholarai.png",
    title: "Scholar<span class='accent'>.AI</span>",
    tagline: "Chrome <span class='em'>MV3 extension</span> · turns research papers into interactive AI sessions · summarization, key extraction, Q&amp;A on any paper",
    hero: "Research AI · Chrome Extension",
    accent: "#7c9eff",
    bg: "#0c0d12",
    tags: ["Chrome MV3", "Gemini API", "JavaScript", "Paper summarization", "Bias detection", "Side-panel UI"],
  },
  {
    file: "scopingrag.png",
    title: "Scoping<span class='accent'>RAG</span>",
    tagline: "Production <span class='em'>RAG pipeline</span> for systematic literature review · LangChain-powered chunking, embedding, retrieval and synthesis over large academic corpora",
    hero: "Systematic Review · LangChain RAG",
    accent: "#8bd17c",
    bg: "#0a0f0c",
    tags: ["Python", "LangChain", "RAG", "Chunking", "Embeddings", "Academic corpora", "Synthesis"],
  },
  {
    file: "edgebench.png",
    title: "Edge<span class='accent'>Bench</span>",
    tagline: "Offline <span class='em'>benchmark suite</span> for local Ollama LLMs on Windows · measures latency per model, enforces JSON-schema output guardrails, generates comparative reports",
    hero: "Local LLM Benchmark · Guardrails",
    accent: "#5de6ff",
    bg: "#08101a",
    tags: ["Python", "Ollama", "JSON schema", "Local LLM", "Benchmark", "Windows", "Guardrails"],
  },
  {
    file: "antivibe.png",
    title: "Anti<span class='accent'>vibe</span>",
    tagline: "Learn what AI writes, <span class='em'>not just accept it</span> · a Claude Code skill that turns AI-generated code into educational deep dives",
    hero: "Claude Code Skill · Anti-vibecoding",
    accent: "#ff7a3b",
    bg: "#100905",
    tags: ["Claude Code", "Skill", "Education", "Deep dives", "MIT", "TypeScript"],
  },
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 810 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

for (const c of cards) {
  const html = card(c);
  await page.setContent(html, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(out, c.file), fullPage: false });
  console.log(`✓ ${c.file}`);
}

await browser.close();
console.log("done.");
