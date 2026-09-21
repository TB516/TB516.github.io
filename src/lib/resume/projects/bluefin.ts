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
} satisfies ResumeEntry;
