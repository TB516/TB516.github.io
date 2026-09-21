import type { Education } from "./schema";

export const education = [
  {
    institution: "Rochester Institute of Technology",
    area: "Game Design & Development",
    studyType: "BS",
    period: { start: "2022-08", end: "2025-12" },
    honors: ["summa cum laude"],
    minors: ["Software Engineering", "History"],
  },
] satisfies Education[];
