import type { Basics } from "./schema";

export const basics = {
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
} satisfies Basics;
