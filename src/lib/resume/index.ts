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
        label: "GitHub",
        url: "https://github.com/TB516",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/thomas-berrios",
      },
    ],
  },
  education: [
    {
      institution: "Rochester Institute of Technology",
      area: "Game Design & Development",
      studyType: "BS",
      period: { start: "2022-08", end: "2025-12" },
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
        "ASP.NET",
        "Spring Boot",
      ],
    },
    {
      name: "Database",
      keywords: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      name: "DevOps",
      keywords: [
        "Docker",
        "Containerization",
        "AWS",
        "Cloud Computing",
        "CI/CD",
        "GitHub Actions",
        "Linux (Ubuntu, RHEL, Fedora)",
      ],
    },
    {
      name: "Agentic Development",
      keywords: ["OpenAI API", "OpenAI Codex", "Claude Code", "T3 Code"],
    },
  ],
  work: [
    {
      name: "iD Tech",
      roles: ["Lead Instructor – Teen Academy"],
      period: { start: "2026-07", end: "2026-08" },
      location: "New York, NY",
      summary:
        "Led project-based courses in Unreal Engine 5, Python, AI, and OpenAI API development",
      highlights: [
        "Led project-based instruction in Unreal Engine 5 and Python, teaching game design, software engineering, debugging, and AI application development with OpenAI APIs",
        "Coached students through hands-on game and software projects, helping them apply agentic workflows to turn course concepts into working prototypes",
        "Partnered with camp leadership to coordinate daily operations, supervise students, and maintain a safe, engaging learning environment",
      ],
      keywords: [
        "Unreal Engine 5",
        "Python",
        "OpenAI API",
        "AI",
        "Agentic Development",
        "Game Design",
        "Software Engineering",
        "Debugging",
      ],
    },
    {
      name: "Rochester Institute of Technology",
      roles: ["Teaching Assistant"],
      period: { start: "2024-08", end: "2025-12" },
      location: "Rochester, NY",
      summary:
        "Evaluated C# coursework and guided students through debugging and project implementation",
      highlights: [
        "Evaluated C# assignments and delivered actionable feedback on data structures, algorithms, object-oriented programming, and GUI development",
        "Supported students in debugging and implementing projects with C#, Windows Forms, and MonoGame",
        "Reinforced software engineering concepts across three semesters through assignment feedback and project guidance",
      ],
      keywords: [
        "C#",
        "Data Structures",
        "Algorithms",
        "Windows Forms",
        "MonoGame",
        "Object-Oriented Programming",
        "GUI Development",
        "Debugging",
      ],
    },
    {
      name: "RIT School of Interactive Games and Media",
      roles: ["Backend Developer", "DevOps Lead"],
      period: { start: "2025-05", end: "2025-08" },
      summary:
        "Led a TypeScript backend rewrite and managed production infrastructure for a 20-person team",
      highlights: [
        "Led backend and DevOps work on a 20-person team, rewriting a legacy Express/MySQL backend as a modular TypeScript architecture with Prisma and service/controller layers",
        "Containerized development and production environments with Docker Compose and Podman, eliminating manual database setup and streamlining onboarding with reproducible environments",
        "Configured and maintained production infrastructure spanning an Apache HTTPD reverse proxy, Shibboleth SSO, and Amazon S3 storage",
      ],
      keywords: [
        "TypeScript",
        "Backend Architecture",
        "DevOps",
        "Express",
        "MySQL",
        "Prisma",
        "Docker Compose",
        "Podman",
        "Apache HTTPD",
        "Shibboleth",
        "Amazon S3",
      ],
    },
    {
      name: "iD Tech",
      roles: ["Lead Instructor – Teen Academy"],
      period: { start: "2024-07", end: "2024-08" },
      location: "New York, NY",
      summary:
        "Led project-based C++ and Unreal Engine instruction with an emphasis on graphics and gameplay programming",
      highlights: [
        "Led project-based instruction in C++ and Unreal Engine, teaching graphics programming, software engineering, gameplay programming, and game development",
        "Mentored students through hands-on projects using SFML and Box2D, from initial design and implementation through debugging and final presentation",
        "Partnered with the camp director to coordinate daily operations, supervise students, and plan activities and off-site trips",
      ],
      keywords: [
        "C++",
        "Graphics Programming",
        "SFML",
        "Box2D",
        "Unreal Engine",
        "Gameplay Programming",
        "Game Development",
        "Debugging",
      ],
    },
    {
      name: "iD Tech",
      roles: ["Lead Instructor – Tech Camp"],
      period: { start: "2024-06", end: "2024-07" },
      location: "New York, NY",
      summary:
        "Led project-based courses across programming, game development, virtual reality, and machine learning",
      highlights: [
        "Taught Unreal Engine, Unity VR, C#, C++, and Python through hands-on lessons in software engineering and game development",
        "Guided students through projects spanning 3D asset creation, API-driven features, and introductory machine learning workflows",
        "Partnered with the camp director to coordinate daily operations, supervise students, and support activities and events",
      ],
      keywords: [
        "Unreal Engine",
        "Unity VR",
        "Game Development",
        "C#",
        "C++",
        "Python",
        "Machine Learning",
      ],
    },
  ],
  projects: [
    {
      name: "sveltekit-pdf-renderer",
      roles: ["Lead Developer"],
      period: { start: "2026-08", end: "present" },
      summary:
        "Published an open-source SvelteKit library for rendering server-side Svelte components as configurable PDF responses",
      highlights: [
        "Designed a type-safe API for combining component-level configuration with per-request props, fonts, PDF options, and response metadata",
        "Built a reusable Puppeteer service that lazily launches and shares Chromium while isolating every render in its own browser context and recovering from browser failures",
        "Integrated rendering with SvelteKit's request pipeline to load same-origin assets through event.fetch and wait for network activity and fonts before generating PDFs",
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
          url: "https://github.com/TB516/sveltekit-pdf-handler",
        },
      ],
    },
    {
      name: "VS Code Remote Flatpak",
      roles: ["Lead Developer"],
      period: { start: "2026-08", end: "present" },
      excludeFromResume: true,
      summary:
        "Developing a VS Code extension that turns Flatpaks into authoritative, devcontainer-like development environments",
      highlights: [
        "Building a VS Code extension that connects workspaces to Flatpak environments, creating a devcontainer-like workflow for reproducible Linux development",
        "Treating the connected Flatpak as the authoritative development environment so projects use its compilers, SDKs, language servers, and dependencies rather than tools installed on the host",
        "Integrating VS Code and its extensions with tools inside the Flatpak using TypeScript and VS Code's proposed remote resolver API",
      ],
      keywords: [
        "TypeScript",
        "Flatpak",
        "Remote Development",
        "VS Code Extension API",
        "Dev Containers",
        "Linux",
        "pnpm",
      ],
    },
    {
      name: "r2modman",
      roles: ["Open-source Contributor"],
      period: { start: "2026-02", end: "present" },
      summary:
        "Building Linux and Flatpak distribution, CI/CD, and update infrastructure for r2modmanPlus alongside upstream compatibility fixes",
      highlights: [
        "Built an end-to-end Flatpak distribution pipeline for r2modmanPlus with sandbox configuration, AppStream metadata, desktop integration, automated CI builds, and signed updates through a Cloudflare R2 repository",
        "Contributed Linux and Flatpak compatibility fixes upstream, implementing portal-based Steam launching with xdg-open, Flatpak Steam permissions, and Steam Deck game-mode fallbacks",
        "Continue to maintain the packaging and update infrastructure, validate changes across Steam environments, triage Linux and Flatpak issues, and submit upstream fixes",
      ],
      keywords: [
        "Linux",
        "Flatpak",
        "CI/CD",
        "Flathub",
        "Steam",
        "Steam Deck",
        "xdg-open",
        "AppStream",
        "Cloudflare R2",
      ],
      links: [
        {
          label: "Homepage",
          url: "https://thunderstore.io/c/riskofrain2/p/ebkr/r2modman/",
        },
        {
          label: "Upstream repository",
          url: "https://github.com/ebkr/r2modmanPlus",
        },
      ],
    },
  ],
} satisfies Resume;
