import type { ResumeEntry } from "../schema";

export const linuxApplicationPackaging = {
  name: "Linux application packaging",
  category: "project",
  roles: ["Maintainer"],
  period: { start: "2026-04", end: "present" },
  summary:
    "I maintain Linux packages for T3 Code and Helium. Both have Flatpak releases with host integration and signed update repositories; Helium also has a Homebrew cask.",
  sections: [
    {
      title: "T3 Code Flatpak",
      paragraphs: [
        "The Electron interface runs inside Flatpak, while its matching server runs on the host. Agents, terminals, Git, and project tools use the user's development environment, and app data stays in the Flatpak's directories.",
      ],
      bullets: [
        "Adapted the TypeScript desktop backend to start the packaged server on the host and preserve remote development support.",
        "Resolved document portal paths from the folder picker so the host server can open selected projects.",
        "Added support for finding and launching Flatpak-installed editors from the Open in menu.",
      ],
    },
    {
      title: "Helium Flatpak",
      paragraphs: [
        "The package uses Helium's official Linux tarballs for x86_64 and aarch64. Flatpak handles installation and updates, while the browser runs on the host with its Chromium sandbox intact.",
      ],
      bullets: [
        "Kept browser data in the Flatpak's application directories and preserved configured user folders such as Downloads.",
        "Added desktop and AppStream metadata for software stores and the app menu.",
      ],
    },
    {
      title: "Distribution and updates",
      bullets: [
        "Published signed Flatpak repositories on GitHub Pages with AppStream metadata and rollback history.",
        "Added daily release checks that open draft update pull requests and validate packages before publication, including native builds for both Helium architectures.",
      ],
    },
    {
      title: "Homebrew",
      bullets: [
        "Maintain the Helium Linux cask, including release updates, installation definitions, and desktop integration.",
        "Built GitHub Actions automation for upstream releases and fixed upgrade issues involving staged paths and desktop icons.",
        "Previously maintained a personal tap for T3 Code and ChatGPT. I retired that tap in September 2026; the Helium cask remains active.",
      ],
    },
  ],
  highlights: [
    "Built T3 Code and Helium Flatpaks with host integration and separate application data.",
    "Published signed Flatpak repositories with release automation, AppStream metadata, and rollback history.",
  ],
  keywords: [
    "Flatpak",
    "Homebrew",
    "Linux",
    "TypeScript",
    "Electron",
    "Shell",
    "Ruby",
    "GitHub Actions",
    "AppStream",
  ],
  links: [
    {
      label: "T3 Code Flatpak",
      url: "https://github.com/TB516/t3code-flatpak",
    },
    {
      label: "Helium Flatpak",
      url: "https://github.com/TB516/helium-flatpak",
    },
    {
      label: "T3 Code Flatpak repository",
      url: "https://t3code.thomasberrios.com/",
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
