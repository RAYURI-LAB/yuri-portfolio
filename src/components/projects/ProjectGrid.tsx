import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="rounded-[var(--radius-md)] border border-dashed border-border bg-surface px-6 py-10 text-center text-muted">
        No projects yet. Add entries in{" "}
        <code className="text-foreground">src/data/projects.ts</code>.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
