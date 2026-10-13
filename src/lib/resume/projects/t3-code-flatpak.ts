import type { ResumeEntry } from "../schema";

export const t3CodeFlatpak = {
  name: "T3 Code Flatpak",
  category: "project",
  roles: ["Maintainer"],
  period: { start: "2026-09", end: "present" },
  summary:
    "An unofficial T3 Code Flatpak that runs the Electron interface inside the sandbox and its server and development tools on the host.",
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
      title: "Distribution and updates",
      bullets: [
        "Published a signed Flatpak repository on GitHub Pages with AppStream metadata and rollback history.",
        "Added daily release checks that open draft update pull requests and validate packages before publication.",
      ],
    },
  ],
  highlights: [
    "Adapted T3 Code's TypeScript/Electron desktop so AI agents, terminals, and development tools run on the host while the interface runs inside Flatpak.",
    "Fixed folder-picker portal paths and added Flatpak editor discovery, with automated tests for both integrations.",
    "Published a signed Flatpak repository with GitHub Actions release automation and update validation.",
  ],
  keywords: ["Flatpak", "Linux", "TypeScript", "Electron", "Shell", "GitHub Actions", "AppStream"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/TB516/t3code-flatpak",
    },
    {
      label: "Flatpak repository",
      url: "https://t3code.thomasberrios.com/",
    },
  ],
} satisfies ResumeEntry;
