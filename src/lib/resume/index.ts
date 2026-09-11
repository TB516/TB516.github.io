import type { Resume } from "./schema";

export const resume = {
  basics: {
    name: "Thomas Berrios",
    label: "Full Stack Developer",
    description:
      "I build web applications and Linux tooling, often around games. I studied Game Design & Development at RIT and have worked on backend infrastructure and taught programming. I care about readable code, reproducible setups, and keeping solutions simple.",
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
    { name: "Languages", keywords: ["TypeScript", "JavaScript", "C#", "Python", "Java", "C++"] },
    {
      name: "Frameworks",
      keywords: [
        "SvelteKit",
        "Svelte",
        "React",
        "Next.js",
        "Express",
        "Electron",
        "ASP.NET",
        "Spring Boot",
      ],
    },
    { name: "Databases", keywords: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    {
      name: "Infrastructure",
      keywords: ["Linux (Ubuntu, RHEL, Fedora)", "Docker", "AWS", "CI/CD", "GitHub Actions"],
    },
    { name: "Testing", keywords: ["Vitest", "Playwright", "Jest"] },
    { name: "Agentic Development", keywords: ["OpenAI Codex", "Claude Code", "T3 Code"] },
  ],
  work: [
    {
      name: "iD Tech",
      roles: ["Lead Instructor – Teen Academy"],
      period: { start: "2026-07", end: "2026-08" },
      location: "New York, NY",
      summary:
        "Taught game development and AI programming courses using Unreal Engine 5, Python, and the OpenAI API.",
      highlights: [
        "Taught students to build and debug games in Unreal Engine 5 and AI applications in Python with the OpenAI API.",
        "Helped students use AI coding tools to build, test, and debug their game and software projects.",
        "Coordinated daily camp operations and student supervision with camp leadership.",
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
      summary: "Supported C# programming courses across three semesters.",
      highlights: [
        "Reviewed C# assignments and gave feedback on data structures, algorithms, object-oriented programming, and GUI development.",
        "Helped students implement and debug projects using C#, Windows Forms, and MonoGame.",
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
        "Built backend and deployment infrastructure for LFG, a platform for RIT students to find project collaborators.",
      highlights: [
        "Implemented substantial parts of the TypeScript backend refactor, including Prisma integration, service/controller structure, and shared frontend/backend types.",
        "Set up the deployment server with Apache HTTPD, Shibboleth single sign-on, and Podman; built GitHub Actions workflows to deploy the client and server.",
        "Configured repository permissions and development tooling, and documented setup for the 20-person team. Containerized MySQL to remove manual database setup.",
        "Established S3-compatible storage infrastructure and client configuration using MinIO and the AWS SDK.",
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
        "GitHub Actions",
        "MinIO",
        "S3-compatible storage",
      ],
    },
    {
      name: "iD Tech",
      roles: ["Lead Instructor – Teen Academy"],
      period: { start: "2024-07", end: "2024-08" },
      location: "New York, NY",
      summary: "Taught C++ and Unreal Engine courses focused on graphics and gameplay programming.",
      highlights: [
        "Taught graphics and gameplay programming in C++ and Unreal Engine.",
        "Guided students through designing, building, debugging, and presenting projects using SFML and Box2D.",
        "Coordinated daily operations, student supervision, activities, and off-site trips with the camp director.",
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
        "Taught programming, game development, virtual reality, and introductory machine learning.",
      highlights: [
        "Taught students to build games and VR projects using Unreal Engine, Unity, C#, C++, and Python.",
        "Helped students create 3D assets, integrate APIs, and build introductory machine learning projects.",
        "Coordinated daily operations, student supervision, and camp activities with the camp director.",
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
      roles: ["Lead Developer"],
      period: { start: "2026-08", end: "present" },
      summary: "A library for generating PDFs from Svelte components in SvelteKit server routes.",
      highlights: [
        "Designed a type-safe API with component defaults and per-request props, fonts, PDF options, and response metadata.",
        "Built a reusable Puppeteer service with isolated render contexts, shared Chromium, and browser-failure recovery.",
        "Integrated SvelteKit asset loading through event.fetch, waiting for network activity and fonts before PDF generation.",
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
    },
    {
      name: "r2modman",
      category: "contribution",
      sections: [
        {
          title: "Flatpak packaging and updates",
          bullets: [
            "Built packaging and distribution infrastructure with desktop integration, AppStream metadata, and signed updates hosted on Cloudflare R2.",
            "Simplified Flatpak builds to use one manifest and added repository publishing for automatic updates.",
          ],
          links: [
            {
              label: "Build and publishing changes · PR #2208",
              url: "https://github.com/ebkr/r2modmanPlus/pull/2208",
            },
            {
              label: "Flathub build preparation · PR #2093",
              url: "https://github.com/ebkr/r2modmanPlus/pull/2093",
            },
          ],
        },
        {
          title: "Steam and Linux compatibility",
          bullets: [
            "Fixed Steam launching from Flatpak using xdg-open, with separate handling for Steam Deck game mode.",
            "Added access to Steam’s Flatpak directory so r2modman can detect Flatpak Steam installations.",
          ],
          links: [
            {
              label: "Steam launching fix · PR #2077",
              url: "https://github.com/ebkr/r2modmanPlus/pull/2077",
            },
            {
              label: "Flatpak Steam detection · PR #2163",
              url: "https://github.com/ebkr/r2modmanPlus/pull/2163",
            },
          ],
        },
        {
          title: "Ongoing work",
          paragraphs: [
            "I maintain the Flatpak packaging and update pipeline, test Steam integration, and investigate Linux compatibility issues.",
          ],
          links: [
            {
              label: "My merged pull requests",
              url: "https://github.com/ebkr/r2modmanPlus/pulls?q=is%3Apr+is%3Amerged+author%3ATB516",
            },
          ],
        },
      ],

      roles: ["Open-source Contributor"],
      period: { start: "2026-02", end: "present" },
      summary:
        "r2modman is a game mod manager. I work on its Linux and Flatpak distribution and contribute compatibility fixes to the upstream project.",
      highlights: [
        "Built Flatpak packaging and CI with AppStream metadata, desktop integration, and signed repository updates on Cloudflare R2.",
        "Contributed merged upstream fixes for Steam launching with xdg-open, Flatpak Steam detection, and Steam Deck game-mode handling.",
        "Maintain the packaging pipeline, test Steam integration, and investigate Linux and Flatpak issues.",
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
