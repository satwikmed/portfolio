import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projects = [
  { id: "sentinelai", url: "https://sentinelai-ochre-six.vercel.app" },
  { id: "shapeshift", url: "https://shapeshift.satwikmedipalli.dev" },
  { id: "diligence-ai", url: "https://diligence.satwikmedipalli.dev" },
  { id: "voiceiq", url: "https://voiceiq.satwikmedipalli.dev" },
  { id: "nfl-draft", url: "https://draft.satwikmedipalli.dev" },
  { id: "nfl-edge", url: "https://nfl-edge.vercel.app" },
  { id: "lumen", url: "https://lumen.satwikmedipalli.dev" },
  { id: "silicon-sentinel", url: "https://silicon.satwikmedipalli.dev" },
];

const outDir = path.join(__dirname, "../public/projects");

async function capture() {
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });

  for (const project of projects) {
    const page = await context.newPage();
    console.log(`Capturing ${project.id}...`);
    try {
      await page.goto(project.url, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(2000);
      const out = path.join(outDir, `${project.id}.png`);
      await page.screenshot({ path: out, fullPage: false });
      console.log(`Saved ${out}`);
    } catch (err) {
      console.error(`Failed ${project.id}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

capture();
