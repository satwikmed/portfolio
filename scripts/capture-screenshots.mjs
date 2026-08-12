import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projects = [
  { id: "sentinelai", url: "https://sentinelai-ochre-six.vercel.app" },
  { id: "shapeshift", url: "https://web-bice-eta-18.vercel.app" },
  { id: "diligence-ai", url: "https://diligence-ai-nine.vercel.app" },
  { id: "voiceiq", url: "https://voice-agent.vercel.app" },
  { id: "nfl-draft", url: "https://nfl-draft-intelligence.vercel.app" },
  { id: "nfl-edge", url: "https://nfl-edge.vercel.app" },
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
      await page.goto(project.url, {
        waitUntil: "networkidle",
        timeout: 60000,
      });
      await page.waitForTimeout(2500);

      const filename =
        project.id === "diligence-ai"
          ? "diligence-ai-nine.png"
          : `${project.id}.png`;

      await page.screenshot({
        path: path.join(outDir, filename),
        type: "png",
      });
      console.log(`  ✓ ${project.id}.png`);
    } catch (err) {
      console.error(`  ✗ ${project.id}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

capture();
