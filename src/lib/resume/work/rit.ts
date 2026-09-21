import type { ResumeEntry } from "../schema";

export const ritTeachingAssistant = {
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
} satisfies ResumeEntry;

export const ritBackendDeveloper = {
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
} satisfies ResumeEntry;
