import { render } from "svelte/server";
import puppeteer from "puppeteer";

import ResumeTemplate from "$lib/resume/ResumeTemplate.svelte";
import { resume } from "$lib/resume/resume";
import fontCss from "$lib/resume/fonts.css?inline";

export const prerender = true;

export async function GET() {
  const { head, body } = render(ResumeTemplate, {
    props: { resume },
  });

  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <style>${fontCss}</style>
        ${head}
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;

  const browser = await puppeteer.launch({
    // GitHub-hosted runners disable the user namespaces Chromium needs for its sandbox.
    args: Deno.env.get("CI") === "true" ? ["--no-sandbox", "--disable-setuid-sandbox"] : [],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => document.fonts.ready);

    const pdf = await page.pdf({
      format: "Letter",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
      printBackground: true,
    });

    return new Response(pdf.buffer as ArrayBuffer, {
      headers: {
        "content-type": "application/pdf",
      },
    });
  } finally {
    await browser.close();
  }
}
