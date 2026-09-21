import type { Resume } from "./schema";

export const resume = {
  basics: {
    name: "Thomas Berrios",
    label: "Software Engineer",
    description:
      "I build web applications and use web technologies in desktop and Linux projects, often around games. I studied Game Design & Development at RIT and have worked on backend infrastructure and taught programming. I care about readable code, reproducible setups, and keeping solutions simple.",
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
      name: "Languages",
      keywords: ["TypeScript", "JavaScript", "C#", "Java", "C++", "Python"],
    },
    {
      name: "Frameworks & Libraries",
      keywords: [
        "SvelteKit",
        "Svelte",
        "React",
        "Next.js",
        "Express",
        "Electron",
        "ASP.NET",
        "Spring Boot",
        "Effect",
      ],
    },
    { name: "Databases", keywords: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    {
      name: "Infrastructure & DevOps",
      keywords: ["AWS", "Linux", "Docker", "Podman", "CI/CD", "GitHub Actions"],
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
      name: "Personal OS",
      category: "project",
      sections: [
        {
          title: "Adapting Dakota",
          paragraphs: [
            "Personal OS is my variation on Project Bluefin's Dakota, reusing its build recipes, components, and integration work alongside GNOME and freedesktop-sdk. My work focuses on reorganizing that configuration for my desktop, maintaining upstream updates, and resolving integration issues. It uses BuildStream and bootc for image builds and deployment.",
          ],
          bullets: [
            "Adapted upstream application and service recipes for my desktop, including Flatpak applications, Docker, Podman, Distrobox, Tailscale, and QEMU/libvirt.",
            "Added GitHub Actions builds that assemble, validate, split into reusable layers, and publish the image to GHCR.",
          ],
        },
        {
          title: "Bring-up and validation",
          paragraphs: [
            "I installed the image onto a fresh virtual disk and tested it in QEMU/KVM through GNOME initial setup, login, and reboot. The validation covered persistent writable state, native and Flatpak applications, container networking, virtualization, and desktop integration.",
          ],
          bullets: [
            "Diagnosed and fixed image composition, initramfs boot, Docker and firewalld, and GNOME Shell extension installation issues found during bring-up.",
            "Documented what was tested and kept unfinished installer, update, hardware, and Secure Boot work explicit.",
          ],
        },
      ],
      roles: ["Maintainer"],
      period: { start: "2026-09", end: "present" },
      summary:
        "A personal variation on Project Bluefin's Dakota, reusing upstream components with a different system configuration and application selection.",
      highlights: [
        "Maintain a personal variation on Project Bluefin's Dakota, adapting upstream build recipes and desktop configuration with automated image builds and publishing through GitHub Actions.",
        "Tested installation, reboot persistence, desktop applications, and Docker and Podman networking in virtual machines.",
      ],
      keywords: [
        "Linux",
        "GNOME",
        "freedesktop-sdk",
        "BuildStream",
        "bootc",
        "OCI",
        "systemd",
        "Btrfs",
        "Podman",
        "QEMU/KVM",
        "GitHub Actions",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/TB516/OS",
        },
        {
          label: "Project Bluefin's Dakota",
          url: "https://github.com/projectbluefin/dakota",
        },
      ],
    },
    {
      name: "Bluefin",
      category: "contribution",
      roles: ["Open-source Contributor"],
      period: {
        start: "2026-09",
        end: "present",
      },
      summary:
        "I contribute to Bluefin Server installation and hardware testing, and investigate and report bugs in Bluefin’s desktop tooling.",
      sections: [
        {
          title: "Installer display",
          paragraphs: [
            "Bluefin Server is a Linux server operating system built from freedesktop-sdk, with image-based updates and atomic rollbacks. Its interactive installer followed the system console to a serial terminal. I investigated the issue and contributed a fix with AI-agent assistance, using the local virtual console so the interface appears on the machine’s monitor while retaining serial boot diagnostics.",
          ],
          bullets: [
            "Tested installation on physical hardware and verified that the installed system booted successfully.",
            "Updated the interactive QEMU target to expose the same console in a graphical window.",
            "Validated the unattended installation workflow and the project’s automated checks.",
          ],
          links: [
            {
              label: "Installer display fix · PR #79",
              url: "https://github.com/projectbluefin/server/pull/79",
            },
          ],
        },
      ],
      highlights: [
        "Fixed Bluefin Server’s local installer display and validated installations on physical hardware and QEMU.",
      ],
      keywords: ["Linux", "systemd", "QEMU", "Installation", "Hardware testing"],
      links: [
        {
          label: "Upstream repository",
          url: "https://github.com/projectbluefin/server",
        },
        {
          label: "My merged Bluefin Server pull requests",
          url: "https://github.com/projectbluefin/server/pulls?q=is%3Apr+is%3Amerged+author%3ATB516",
        },
      ],
    },
    {
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
      excludeFromResume: true,
    },
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
      roles: ["Developer"],
      period: { start: "2026-08", end: "present" },
      summary: "A library for generating PDFs from Svelte components in SvelteKit server routes.",
      highlights: [
        "Built a type-safe SvelteKit library that generates PDFs from Svelte components through server-side rendering and Puppeteer.",
        "Reused Chromium across requests, isolated each render in a separate browser context, and added recovery after browser failures.",
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
      name: "Mixamp",
      category: "project",
      roles: ["Developer"],
      period: {
        start: "2026-08",
        end: "2026-09",
      },
      summary:
        "A Linux desktop app for balancing game and voice-chat audio, inspired by controls on audio hardware I’d used. It started as a testbed for GTKX and my Flatpak development environment.",
      highlights: [
        "Routes game and voice audio through separate outputs to the system’s default output.",
        "Adjusts the balance between the two outputs and saves the setting between sessions.",
        "Uses GTKX to build a GTK 4 and libadwaita interface, with WirePlumber for audio routing.",
        "Supports background operation with permission and reconnecting after the audio service disconnects.",
      ],
      keywords: ["TypeScript", "GTK 4", "libadwaita", "WirePlumber", "PipeWire", "Flatpak"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/TB516/mixamp",
        },
      ],
      excludeFromResume: true,
    },
    {
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
      excludeFromResume: true,
    },
    {
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
      excludeFromResume: true,
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
          title: "Ongoing maintenance",
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
        {
          title: "Northstar across the Thunderstore ecosystem",
          paragraphs: [
            "My Northstar compatibility work spans Thunderstore's game definitions, r2modman, and NorthstarLauncher.",
            "I tracked down two path-handling issues that prevented Northstar from loading profiles under Proton. r2modman supplied a Unix path where the launcher expected a Windows path, and NorthstarLauncher incorrectly treated absolute profile paths as relative to the game directory.",
          ],
          bullets: [
            "Contributed a merged Thunderstore ecosystem-schema fix that switches Titanfall 2's Northstar configuration from steam-direct to the standard Steam runner, fixing Linux launching while preserving Northstar launch arguments.",
            "Submitted coordinated fixes that translate the profile path for Proton and preserve absolute paths in both Northstar loaders.",
            "Built the patched launcher with MSVC under Wine, built a local r2modman Flatpak, and verified the combined fix under Proton.",
          ],
          links: [
            {
              label: "Thunderstore Northstar launch fix · PR #305",
              url: "https://github.com/thunderstore-io/ecosystem-schema/pull/305",
            },
            {
              label: "r2modman profile-path fix · PR #2279",
              url: "https://github.com/ebkr/r2modmanPlus/pull/2279",
            },
            {
              label: "NorthstarLauncher absolute-path fix · PR #939",
              url: "https://github.com/R2Northstar/NorthstarLauncher/pull/939",
            },
          ],
        },
      ],

      roles: ["Open-source Contributor"],
      period: { start: "2026-02", end: "present" },
      summary:
        "r2modman is a game mod manager. I work on its Linux and Flatpak distribution and contribute Northstar compatibility fixes across r2modman, Thunderstore's ecosystem schema, and NorthstarLauncher.",
      highlights: [
        "Built Flatpak packaging and CI with AppStream metadata, desktop integration, and signed repository updates on Cloudflare R2.",
        "Contributed merged upstream fixes for Steam launching with xdg-open, Flatpak Steam detection, and Steam Deck game-mode handling.",
        "Maintain the packaging pipeline, test Steam integration, and investigate Linux and Flatpak issues.",
        "Fixed Northstar launching on Linux through a merged Thunderstore ecosystem-schema change to use the standard Steam runner.",
        "Diagnosed a cross-project Proton path bug, submitted coordinated fixes to r2modman and NorthstarLauncher, and verified patched builds through Flatpak and Proton.",
      ],
      keywords: [
        "Linux",
        "Flatpak",
        "CI/CD",
        "Flathub",
        "Steam",
        "Steam Deck",
        "Proton",
        "C++",
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
