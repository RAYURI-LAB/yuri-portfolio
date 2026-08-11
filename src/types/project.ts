export type ProjectCategory = "mes" | "web" | "ai" | "other";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  client: string;
  role: string;
  period: string;
  periodLabel: string;
  participationRate?: string;
  category: ProjectCategory;
  featured: boolean;
  responsibilities: string[];
  techStack: string[];
  environment: string[];
  /** Optional public links — omitted for confidential client work. */
  githubUrl?: string;
  liveDemoUrl?: string;
  thumbnail?: string;
  order: number;
}
