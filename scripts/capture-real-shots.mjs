// Capture real landing-page screenshots for each project · replaces the
// GitHub auto-generated dark cards with actual app UI shots.
//
// Usage: node scripts/capture-real-shots.mjs
// (assumes delrio repo already has playwright installed, runs from there)

import { chromium } from "playwright";
import { mkdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const out = join(root, "images");

const shots = [
  // Live web apps — capture the hero/landing page above the fold.
  { file: "delos.png",         url: "https://delrio.vercel.app",                                settle: 4500 },
  { file: "qyntra.png",        url: "https://qyntra-app.vercel.app",                           settle: 5000 },
  { file: "mcpmarketplace.png", url: "https://mcp-hub-registry.vercel.app",                     settle: 4500 },
  { file: "medreview.png",     url: "https://medai-deploy.vercel.app",                          settle: 4500 },
  { file: "cogniloop.png",     url: "https://cogniloop-vaibhav4046s-projects.vercel.app",      settle: 4500 },
  { file: "portfolio.png",     url: "https://vaibhavlalwani.vercel.app",                        settle: 4500 },
  // No live demo · capture the GitHub repo README so the card shows real
  // project context (real screenshots, real headings) instead of the
  // auto-generated dark social card.
  { file: "scholarai.png",     url: "https://github.com/vaibhav4046/Scholar.AI-Chrome-Extension", settle: 3000 },
  { file: "scopingrag.png",    url: "https://github.com/vaibhav4046/Scoping_Review_RAG_Pipeline",  settle: 3000 },
  { file: "edgebench.png",     url: "https://github.com/vaibhav4046/edgebench-local-guardrails",   settle: 3000 },
  { file: "antivibe.png",      url: "https://github.com/vaibhav4046/antivibe",                     settle: 3000 },
];

await mkdir(out, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

for (const s of shots) {
  try {
    console.log(`→ ${s.file} ← ${s.url}`);
    await page.goto(s.url, { waitUntil: "networkidle", timeout: 25_000 }).catch(() => {});
    await page.waitForTimeout(s.settle);
    await page.screenshot({ path: join(out, s.file), fullPage: false });
    console.log(`  ✓ saved ${s.file}`);
  } catch (e) {
    console.error(`  ✗ ${s.file}: ${e?.message ?? e}`);
  }
}

await browser.close();
console.log("done.");
