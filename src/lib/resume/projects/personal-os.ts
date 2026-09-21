import type { ResumeEntry } from "../schema";

export const personalOS = {
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
} satisfies ResumeEntry;
