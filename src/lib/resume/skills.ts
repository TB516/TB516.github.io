import type { SkillGroup } from "./schema";

export const skills = [
  {
    name: "Languages",
    keywords: ["TypeScript", "C#", "JavaScript", "Java", "Python", "C++"],
  },
  {
    name: "Frameworks & Libraries",
    keywords: [
      "Node.js",
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
  { name: "AI Development Tools", keywords: ["OpenAI Codex", "Claude Code", "T3 Code"] },
] satisfies SkillGroup[];
