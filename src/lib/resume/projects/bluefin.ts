import type { ResumeEntry } from "../schema";

export const bluefin = {
  name: "Bluefin",
  category: "contribution",
  roles: ["Open-source Contributor"],
  period: {
    start: "2026-09",
    end: "present",
  },
  summary:
    "I contribute installer and hardware compatibility fixes to Bluefin Server, and investigate and report bugs in Bluefin’s desktop tooling.",
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
    {
      title: "TPM compatibility and boot health",
      paragraphs: [
        "On my physical server, optional TPM PCR-lock services failed because the hardware lacked required capabilities, causing Bluefin’s boot-health check to reject an otherwise working boot. I investigated the failures and contributed a merged fix with AI-agent assistance that checks support before running those services.",
      ],
      bullets: [
        "Added systemd capability checks so unsupported hardware skips PCR locking cleanly while failures on supported hardware remain visible.",
        "Verified equivalent service overrides across reboots on the affected server, with no failed system services and passing boot-health checks.",
        "Documented the compatibility behavior while preserving other TPM functions and credential sealing.",
      ],
      links: [
        {
          label: "TPM compatibility fix · PR #469",
          url: "https://github.com/projectbluefin/server/pull/469",
        },
      ],
    },
  ],
  highlights: [
    "Fixed Bluefin Server’s local installer display and validated installations on physical hardware and QEMU.",
    "Fixed boot-health failures on unsupported TPM hardware by adding systemd capability checks.",
  ],
  keywords: ["Linux", "systemd", "TPM", "QEMU", "Installation", "Hardware testing"],
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
} satisfies ResumeEntry;
