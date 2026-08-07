import { Browser, Cache, detectBrowserPlatform, install } from "@puppeteer/browsers";
import puppeteer from "puppeteer";
import { createServer } from "vite";

const projectRoot = await Deno.realPath(new URL("..", import.meta.url));
const outputPath = new URL("../static/Thomas_Berrios_Resume.pdf", import.meta.url);
const host = "127.0.0.1";
const browser = puppeteer as typeof puppeteer & {
  configuration: { cacheDirectory: string };
  defaultBrowserRevision: string;
};

const browserPath = browser.executablePath();
const browserExists = await Deno.stat(browserPath).then(
  () => true,
  () => false,
);

if (!browserExists) {
  const { cacheDirectory } = browser.configuration;
  const platform = detectBrowserPlatform()!;
  const buildId = browser.defaultBrowserRevision;
  const archive = await install({
    browser: Browser.CHROME,
    buildId,
    cacheDir: cacheDirectory,
    platform,
    unpack: false,
  });
  const destination = new Cache(cacheDirectory).installationDir(Browser.CHROME, platform, buildId);

  await Deno.mkdir(destination, { recursive: true });
  await new Deno.Command("unzip", { args: ["-o", "-q", archive, "-d", destination] }).output();
  await Deno.remove(archive);
}

const server = await createServer({
  root: projectRoot,
  server: { host, port: 0 },
});

await server.listen();

try {
  const address = server.httpServer?.address();

  if (!address || typeof address === "string") {
    throw new Error("Vite did not expose a local HTTP server address");
  }

  const resumeUrl = `http://${host}:${address.port}/resume`;
  const browserInstance = await puppeteer.launch();
  try {
    const page = await browserInstance.newPage();
    await page.goto(resumeUrl, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);

    const pdfBytes = await page.pdf({
      format: "Letter",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
      printBackground: true,
    });

    await Deno.writeFile(outputPath, pdfBytes);
  } finally {
    await browserInstance.close();
  }

  console.log(`Generated ${outputPath.pathname}`);
} finally {
  await server.close();
}
