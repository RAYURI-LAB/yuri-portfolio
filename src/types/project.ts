export type ProjectCategory = "web" | "ai" | "tool" | "other";
export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  techStack: string[];
  thumbnail: string;
  images?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  highlights?: string[];
  role?: string;
  period?: string;
  order: number;
}
