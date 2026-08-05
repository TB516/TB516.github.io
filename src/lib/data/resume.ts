import type { Resume } from "@jsonresume/types";

export const resume = {
  basics: {
    name: "Thomas Berrios",
    label: "Full Stack Developer",
    email: "thomas@thomasberrios.com",
    profiles: [
      {
        network: "LinkedIn",
        username: "thomas-berrios",
        url: "https://linkedin.com/in/thomas-berrios",
      },
      {
        network: "GitHub",
        username: "TB516",
        url: "https://github.com/TB516",
      },
    ],
  },
  education: [
    {
      institution: "Rochester Institute of Technology",
      area: "Game Design & Development",
      studyType: "BS",
      startDate: "2022-08",
      endDate: "2025-12",
      summary: "summa cum laude; Minors: Software Engineering; History",
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
      date: "Jul 2026-Present; Jun 2024-Aug 2025",
      location: "New York, NY",
      highlights: [
        "Led instruction for multiple technical courses, including Unreal Engine, Unity VR, C#, C++, and Python fundamentals, teaching students core software engineering and game development concepts",
        "Delivered project-based instruction integrating graphics programming (SFML, Box2D), 3D asset creation, and API-driven features, including introductory machine learning workflows",
        "Collaborated with camp leadership to coordinate daily operations, supervise student activities, and manage off-site events across NYC, ensuring safety and engagement",
      ],
    },
    {
      name: "Rochester Institute of Technology",
      position: "Teaching Assistant",
      startDate: "2024-08",
      endDate: "2025-12",
      location: "Rochester, NY",
      highlights: [
        "Evaluated and provided feedback on C# assignments covering data structures, algorithms, object-oriented programming, and GUI development",
        "Assisted students with debugging and project implementation using C#, Windows Forms, and MonoGame",
        "Supported course delivery across three semesters, reinforcing core software engineering concepts",
      ],
    },
    {
      name: "RIT School of Interactive Games and Media",
      position: "Backend Developer & Devops Lead",
      startDate: "2025-06",
      endDate: "2025-08",
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
      startDate: "2026-06",
      endDate: "present",
      highlights: [
        "Building a Flatpak-first bootc management app with React, TypeScript, and GTKX",
        "Built a reproducible GNOME Flatpak build and bundling pipeline with Node.js, pnpm, Vite hot module replacement, and automated scripts",
        "Developing flatpak friendly IPC using Unix Domain Sockets",
      ],
    },
    {
      name: "r2modman",
      roles: ["Open-source Contributor"],
      startDate: "2026-02",
      endDate: "present",
      highlights: [
        "Improved Linux/Flatpak compatibility by enabling Steam launch via desktop portals, fixing sandbox execution limitations",
        "Built Flatpak release pipeline to publish to Cloudflare R2, allowing for automatic updates",
      ],
    },
  ],
} satisfies Resume;
