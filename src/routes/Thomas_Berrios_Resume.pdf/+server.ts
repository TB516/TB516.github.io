import { createPdfResponder } from "sveltekit-pdf-renderer";

import * as ResumeModule from "./Resume.svelte";

export const prerender = true;

const createPdfResponse = createPdfResponder({
  args: Deno.env.get("CI") === "true" ? ["--no-sandbox", "--disable-setuid-sandbox"] : [],
});

export async function GET(event) {
  return createPdfResponse(event, ResumeModule);
}
