import type { ResumeEntry } from "../schema";

export const linuxApplicationPackaging = {
  name: "Linux application packaging",
  category: "project",
  roles: ["Maintainer"],
  period: {
    start: "2026-04",
    end: "present",
  },
  summary:
    "Linux application packaging, update automation, and desktop integration. I maintain the Helium Homebrew cask and previously maintained a personal tap for T3 Code and ChatGPT.",
  highlights: [
    "Maintain the Helium Linux cask, including release updates, installation definitions, and desktop integration.",
    "Built GitHub Actions automation to keep packages current with upstream releases and adapted casks to Homebrew packaging changes.",
    "Fixed upgrade and installation issues, including staged paths and desktop icon locations.",
    "Retired the personal tap for T3 Code and ChatGPT in September 2026 after moving to Personal OS. Helium maintenance continues independently.",
  ],
  keywords: ["Homebrew", "Linux", "Ruby", "GitHub Actions", "Desktop integration"],
  links: [
    {
      label: "Archived personal tap",
      url: "https://github.com/TB516/homebrew-tap",
    },
    {
      label: "Helium cask",
      url: "https://github.com/TB516/homebrew-helium-browser-linux",
    },
  ],
} satisfies ResumeEntry;
