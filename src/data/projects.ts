import type { Project } from "@/types/project";

/**
 * Placeholder projects — structure only.
 * Add real projects by appending objects and images under /public/images/projects.
 */
export const projects: Project[] = [
  {
    slug: "placeholder-web-app",
    title: "Placeholder Web App",
    summary:
      "Sample web project card. Replace title, summary, links, and images with a real project.",
    description:
      "Longer description placeholder for the project detail page. Explain the problem, approach, and outcome when you have real content.",
    category: "web",
    status: "completed",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/projects/placeholder-web.svg",
    images: ["/images/projects/placeholder-web.svg"],
    githubUrl: "https://github.com/your-username/placeholder-web-app",
    liveDemoUrl: "https://example.com",
    highlights: [
      "Placeholder outcome one",
      "Placeholder outcome two",
    ],
    role: "Full-stack Developer",
    period: "YYYY.MM – YYYY.MM",
    order: 1,
  },
  {
    slug: "placeholder-ai-project",
    title: "Placeholder AI Project",
    summary:
      "Sample AI project entry. Use category \"ai\" so future AI work can be filtered or highlighted.",
    description:
      "Detail-page placeholder for an AI-focused project. Describe model usage, UX, and evaluation metrics later.",
    category: "ai",
    status: "in-progress",
    featured: true,
    techStack: ["Python", "LLM API", "Next.js"],
    thumbnail: "/images/projects/placeholder-ai.svg",
    images: ["/images/projects/placeholder-ai.svg"],
    githubUrl: "https://github.com/your-username/placeholder-ai-project",
    highlights: [
      "Placeholder AI capability",
      "Placeholder evaluation note",
    ],
    role: "Developer",
    period: "YYYY.MM – Present",
    order: 2,
  },
];
