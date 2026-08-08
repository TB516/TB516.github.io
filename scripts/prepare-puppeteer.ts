import { Browser, Cache, detectBrowserPlatform, install } from "@puppeteer/browsers";
import puppeteer from "puppeteer";

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

console.log(`Puppeteer browser ready at ${browserPath}`);
