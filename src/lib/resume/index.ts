import type { Resume } from "./schema";

export const resume = {
  basics: {
    name: "Thomas Berrios",
    label: "Full Stack Developer",
    description:
      "Full stack developer working across TypeScript applications, backend systems, DevOps, and open-source Linux tooling.",
    availability: "Looking for work",
    email: "thomas@thomasberrios.com",
    profiles: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/thomas-berrios",
      },
      {
        label: "GitHub",
        url: "https://github.com/TB516",
      },
    ],
  },
  education: [
    {
      institution: "Rochester Institute of Technology",
      area: "Game Design & Development",
      studyType: "BS",
      periods: [{ start: "2022-08", end: "2025-12" }],
      honors: ["summa cum laude"],
      minors: ["Software Engineering", "History"],
    },
  ],
  skills: [
    {
      name: "Programming Languages",
      keywords: ["JavaScript", "TypeScript", "Node.js", "C#", "Python", "Java", "C++"],
    },
    {
      name: "Frameworks",
      keywords: [
        "React",
        "Next",
        "Svelte",
        "SvelteKit",
        "Express",
        "Electron",
        "Jest",
        "Vitest",
        "Playwright",
        "ASP.net",
        "Spring Boot",
      ],
    },
    {
      name: "Database",
      keywords: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      name: "Devops",
      keywords: [
        "Docker",
        "Containerization",
        "AWS",
        "Cloud Computing",
        "Ci/Cd",
        "GitHub Actions",
        "Linux (Ubuntu, RHEL, Fedora)",
      ],
    },
    {
      name: "Agentic Development",
      keywords: ["OpenAI Codex", "Claude Code", "T3 Code"],
    },
  ],
  work: [
    {
      name: "iD Tech",
      position: "Lead Instructor",
      periods: [
        { start: "2026-07", end: "2026-08" },
        { start: "2024-06", end: "2024-08" },
      ],
      location: "New York, NY",
      summary: "Led project-based courses in Unreal Engine, Unity VR, C#, C++, and Python",
      highlights: [
        "Led instruction for multiple technical courses, including Unreal Engine, Unity VR, C#, C++, and Python fundamentals, teaching students core software engineering and game development concepts",
        "Delivered project-based instruction integrating graphics programming (SFML, Box2D), 3D asset creation, and API-driven features, including introductory machine learning workflows",
        "Collaborated with camp leadership to coordinate daily operations, supervise student activities, and manage off-site events across NYC, ensuring safety and engagement",
      ],
    },
    {
      name: "Rochester Institute of Technology",
      position: "Teaching Assistant",
      periods: [{ start: "2024-08", end: "2025-12" }],
      location: "Rochester, NY",
      summary:
        "Evaluated C# assignments and supported students with debugging and project implementation",
      highlights: [
        "Evaluated and provided feedback on C# assignments covering data structures, algorithms, object-oriented programming, and GUI development",
        "Assisted students with debugging and project implementation using C#, Windows Forms, and MonoGame",
        "Supported course delivery across three semesters, reinforcing core software engineering concepts",
      ],
    },
    {
      name: "RIT School of Interactive Games and Media",
      position: "Backend Developer & Devops Lead",
      periods: [{ start: "2025-05", end: "2025-08" }],
      summary: "Led a TypeScript backend rewrite and DevOps work for a 20-person team",
      highlights: [
        "Led backend and DevOps efforts on a 20-person team, leading a full backend rewrite of a legacy Express/MySQL codebase into a modular architecture using Prisma, service/controller layers, and TypeScript",
        "Containerized development and production environments using Docker Compose and Podman, eliminating manual database setup and improving onboarding with reproducible environments",
        "Managed and configured production infrastructure including Apache HTTPD reverse proxy, Shibboleth SSO integration, and S3 storage",
      ],
    },
  ],
  projects: [
    {
      name: "Bootc Buddy",
      roles: ["Lead Developer"],
      periods: [{ start: "2026-06", end: "present" }],
      summary: "Building a Flatpak-first bootc management app with React, TypeScript, and GTKX",
      highlights: [
        "Building a Flatpak-first bootc management app with React, TypeScript, and GTKX",
        "Built a reproducible GNOME Flatpak build and bundling pipeline with Node.js, pnpm, Vite hot module replacement, and automated scripts",
        "Developing flatpak friendly IPC using Unix Domain Sockets",
      ],
    },
    {
      name: "r2modman",
      roles: ["Open-source Contributor"],
      periods: [{ start: "2026-02", end: "present" }],
      summary: "Contributing upstream Linux and Flatpak fixes to r2modmanPlus",
      highlights: [
        "Contributed upstream Linux/Flatpak fixes to r2modmanPlus, implementing portal-based Steam launching with xdg-open, Flatpak Steam permissions, and Steam Deck game-mode fallbacks",
        "Prepared a Flathub-compatible Flatpak distribution with AppStream metadata, desktop integration, sandbox configuration, CI builds, and a signed Cloudflare R2 repository pipeline for automatic updates",
        "Continuing to triage Linux and Flatpak issues, test changes across Steam environments, and submit upstream fixes as the project evolves",
      ],
    },
  ],
} satisfies Resume;
