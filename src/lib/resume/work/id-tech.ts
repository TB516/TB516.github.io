import type { Experience } from "../schema";

export const idTech2026 = {
  name: "iD Tech",
  location: "New York, NY",
  summary:
    "Taught game development and AI programming courses using Unreal Engine 5, Python, and the OpenAI API.",
  positions: [
    {
      roles: ["Lead Instructor – Teen Academy"],
      period: { start: "2026-07", end: "2026-08" },
      highlights: [
        "Taught students to build and debug games in Unreal Engine 5 and AI applications in Python with the OpenAI API.",
        "Helped students use AI coding tools to build, test, and debug their game and software projects.",
        "Coordinated daily camp operations and student supervision with camp leadership.",
      ],
    },
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
} satisfies Experience;

export const idTech2024 = {
  name: "iD Tech",
  location: "New York, NY",
  summary:
    "Taught game development, VR, and Python at Tech Camp, then C++ graphics and gameplay programming at Teen Academy.",
  positions: [
    {
      roles: ["Lead Instructor – Teen Academy"],
      period: { start: "2024-07", end: "2024-08" },
      highlights: [
        "Taught graphics and gameplay programming in C++ and Unreal Engine.",
        "Guided students through designing, building, debugging, and presenting projects using SFML and Box2D.",
        "Coordinated daily operations, student supervision, activities, and off-site trips with the camp director.",
      ],
    },
    {
      roles: ["Lead Instructor – Tech Camp"],
      period: { start: "2024-06", end: "2024-07" },
      highlights: [
        "Taught students to build games and VR projects using Unreal Engine, Unity, C#, C++, and Python.",
        "Helped students create 3D assets, integrate APIs, and build introductory machine learning projects.",
      ],
    },
  ],
  keywords: [
    "C++",
    "Graphics Programming",
    "SFML",
    "Box2D",
    "Unreal Engine",
    "Gameplay Programming",
    "Game Development",
    "Unity VR",
    "C#",
    "Python",
    "Machine Learning",
    "Debugging",
  ],
} satisfies Experience;
