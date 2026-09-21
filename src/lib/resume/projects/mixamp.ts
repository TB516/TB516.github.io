import type { ResumeEntry } from "../schema";

export const mixamp = {
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
} satisfies ResumeEntry;
