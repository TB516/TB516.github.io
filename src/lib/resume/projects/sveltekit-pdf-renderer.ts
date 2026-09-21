import type { ResumeEntry } from "../schema";

export const sveltekitPdfRenderer = {
  name: "sveltekit-pdf-renderer",
  category: "project",
  sections: [
    {
      title: "Capabilities",
      bullets: [
        "Pass typed props to the component being rendered.",
        "Configure fonts, page size, and backgrounds.",
        "Set component defaults and override them per request.",
        "Customize response metadata and browser launch options.",
      ],
    },
    {
      title: "Built for SvelteKit",
      paragraphs: [
        "The renderer loads application assets through SvelteKit’s request handling and waits for fonts before generating a PDF. It reuses a browser across requests while keeping each render in a separate browser context.",
      ],
    },
  ],
  roles: ["Developer"],
  period: { start: "2026-08", end: "present" },
  summary: "A library for generating PDFs from Svelte components in SvelteKit server routes.",
  highlights: [
    "Built a type-safe SvelteKit library that generates PDFs from Svelte components through server-side rendering and Puppeteer.",
    "Reused Chromium across requests, isolated each render in a separate browser context, and added recovery after browser failures.",
  ],
  keywords: [
    "TypeScript",
    "SvelteKit",
    "Svelte 5",
    "Puppeteer",
    "Chromium",
    "Server-Side Rendering",
    "PDF Generation",
    "Type-Safe API Design",
  ],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/TB516/sveltekit-pdf-renderer",
    },
  ],
} satisfies ResumeEntry;
