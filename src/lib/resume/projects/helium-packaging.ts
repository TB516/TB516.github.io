import type { ResumeEntry } from "../schema";

export const heliumPackaging = {
  name: "Helium Linux packaging",
  category: "project",
  roles: ["Maintainer"],
  period: { start: "2026-04", end: "present" },
  summary:
    "I maintain Linux packages for the Helium browser, including a Flatpak for x86_64 and aarch64, and a Homebrew cask.",
  sections: [
    {
      title: "Helium Flatpak",
      paragraphs: [
        "The package uses Helium's official Linux tarballs for x86_64 and aarch64. Flatpak handles installation and updates, while the browser runs on the host with its Chromium sandbox intact.",
      ],
      bullets: [
        "Kept browser data in the Flatpak's application directories and preserved configured user folders such as Downloads.",
        "Reused Helium's upstream desktop entry, adjusted its launcher and icon for Flatpak, and added AppStream metadata for software stores.",
      ],
    },
    {
      title: "Distribution and updates",
      bullets: [
        "Published a signed Flatpak repository on GitHub Pages with AppStream metadata and rollback history.",
        "Added daily release checks that open update pull requests and validate packages before publication, including native builds for x86_64 and aarch64.",
      ],
    },
    {
      title: "Homebrew",
      bullets: [
        "Maintain the Helium Linux cask, including release updates, installation definitions, and desktop integration.",
        "Built GitHub Actions automation for upstream releases and fixed upgrade issues involving staged install paths and desktop integration.",
      ],
    },
  ],
  highlights: [
    "Built a Helium Flatpak for x86_64 and aarch64 with host execution and separate application data.",
    "Published a signed Flatpak repository with release automation, AppStream metadata, and rollback history.",
    "Maintain a Helium Linux Homebrew cask with automated release updates and desktop integration.",
  ],
  keywords: ["Flatpak", "Homebrew", "Linux", "Shell", "Ruby", "GitHub Actions", "AppStream"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/TB516/helium-flatpak",
    },
    {
      label: "Helium Flatpak repository",
      url: "https://helium.thomasberrios.com/",
    },
    {
      label: "Helium Homebrew cask",
      url: "https://github.com/TB516/homebrew-helium-browser-linux",
    },
  ],
} satisfies ResumeEntry;
