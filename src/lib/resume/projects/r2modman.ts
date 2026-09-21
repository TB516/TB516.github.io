import type { ResumeEntry } from "../schema";

export const r2modman = {
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
} satisfies ResumeEntry;
