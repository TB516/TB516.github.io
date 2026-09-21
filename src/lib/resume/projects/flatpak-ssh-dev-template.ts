import type { ResumeEntry } from "../schema";

export const flatpakSshDevTemplate = {
  name: "Flatpak SSH development template",
  category: "project",
  roles: ["Developer"],
  period: {
    start: "2026-08",
    end: "present",
  },
  summary:
    "A reusable VS Code development environment that runs the app and workspace extensions inside the same Flatpak SDK. I built it to make testing inside the sandbox part of everyday development, including hot module replacement for JavaScript and Node.js apps.",
  highlights: [
    "Connects VS Code through Remote-SSH so workspace extensions and development tools use the same SDK as the app.",
    "Keeps a persistent development home and project-local SSH keys.",
    "Uses separate development and production manifests.",
    "Provides commands to build the environment, run tools, and start or stop development sessions.",
    "Manages the session through a systemd user service and stops it after disconnection.",
    "Keeps the development session running for live app testing and hot module replacement, and reuses it for one-off commands without rebuilding the SDK environment.",
  ],
  keywords: ["Flatpak", "OpenSSH", "VS Code Remote-SSH", "systemd", "Shell"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/TB516/flatpak-ssh-dev-template",
    },
  ],
} satisfies ResumeEntry;
