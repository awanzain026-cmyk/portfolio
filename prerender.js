import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { createServer } from "http";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");
const PORT = 4321;

function contentType(filePath) {
  if (filePath.endsWith(".html")) return "text/html";
  if (filePath.endsWith(".js")) return "application/javascript";
  if (filePath.endsWith(".css")) return "text/css";
  if (filePath.endsWith(".svg")) return "image/svg+xml";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".ico")) return "image/x-icon";
  if (filePath.endsWith(".json")) return "application/json";
  return "application/octet-stream";
}

async function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = req.url.split("?")[0];
      let filePath = path.join(distDir, urlPath === "/" ? "index.html" : urlPath);
      let data;
      try {
        data = await readFile(filePath);
      } catch {
        // SPA fallback for any unmatched path
        data = await readFile(path.join(distDir, "index.html"));
        filePath = "index.html";
      }
      res.writeHead(200, { "Content-Type": contentType(filePath) });
      res.end(data);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  await new Promise((resolve) => server.listen(PORT, resolve));
  return server;
}

async function prerender() {
  console.log("[prerender] Starting local static server...");
  const server = await startServer();

  console.log("[prerender] Launching serverless-compatible headless browser...");
  const browser = await puppeteer.launch({
    args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Let entrance animations settle so the captured HTML reflects final content
    await new Promise((r) => setTimeout(r, 1500));

    const html = await page.content();
    const outPath = path.join(distDir, "index.html");
    await writeFile(outPath, html, "utf-8");
    console.log(
      `[prerender] Wrote fully rendered HTML to dist/index.html (${html.length} bytes)`
    );
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error("[prerender] Failed:", err);
  // Don't fail the whole deployment if prerendering breaks -- ship the normal SPA build instead
  console.error("[prerender] Continuing with standard (non-prerendered) build.");
  process.exit(0);
});
