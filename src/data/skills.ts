import type { SkillGroup } from "@/types/skill";

/**
 * `core` — career-wide stack
 * `current` — stack used in the current / recent MES project environment
 */
export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    scope: "core",
    items: ["JavaScript", "Vue.js", "HTML", "CSS"],
  },
  {
    category: "Backend / API",
    scope: "core",
    items: ["REST API", "Spring Boot"],
  },
  {
    category: "Database",
    scope: "core",
    items: ["MSSQL", "Oracle"],
  },
  {
    category: "Tools",
    scope: "core",
    items: [
      "Visual Studio Code",
      "IntelliJ",
      "STS4",
      "DBeaver",
      "Git",
      "Maven",
    ],
  },
  {
    category: "MES / Domain",
    scope: "core",
    items: [
      "MES",
      "Digital Factory",
      "Manufacturing Solution",
      "Web UI",
    ],
  },
  {
    category: "Frontend",
    scope: "current",
    items: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "Vue Router",
      "Axios",
      "Element Plus",
      "AUIGrid",
    ],
  },
];
