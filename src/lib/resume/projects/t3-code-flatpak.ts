import type { ResumeEntry } from "../schema";

export const t3CodeFlatpak = {
  name: "T3 Code Flatpak",
  category: "project",
  sections: [
    {
      title: "Desktop and development environment",
      paragraphs: [
        "An unofficial Flatpak package for T3 Code. The Electron interface runs inside Flatpak, while the matching server runtime runs on the host so coding agents, terminals, Git, and project tools use the user's existing development environment. Application data stays in the Flatpak's directories.",
      ],
      bullets: [
        "Adapted the TypeScript desktop backend to launch the packaged server on the host and preserve communication with the Electron interface.",
        "Preserved remote development support using the user's existing host configuration and credentials.",
        "Builds a pinned upstream release with focused patches for Flatpak integration.",
      ],
    },
    {
      title: "Distribution",
      bullets: [
        "Added a GitHub Pages workflow that publishes a signed Flatpak repository with AppStream metadata and rollback history.",
      ],
    },
  ],
  roles: ["Developer"],
  period: { start: "2026-09", end: "present" },
  summary:
    "An unofficial T3 Code Flatpak that keeps the desktop interface sandboxed while running coding agents and development tools on the host.",
  highlights: [
    "Packaged T3 Code as a Flatpak with its Electron interface sandboxed and its server, agents, terminals, and development tools running on the host.",
    "Published a signed Flatpak repository through GitHub Pages with AppStream metadata and rollback history.",
  ],
  keywords: ["TypeScript", "Electron", "Effect", "Flatpak", "CI/CD", "GitHub Actions"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/TB516/t3code",
    },
  ],
} satisfies ResumeEntry;
