import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="rounded-[var(--radius-lg)] border border-dashed border-border-strong bg-surface px-6 py-16 text-center text-muted">
        등록된 프로젝트가 없습니다.{" "}
        <code className="font-mono text-sm text-foreground">
          src/data/projects.ts
        </code>
        에 추가하세요.
      </p>
    );
  }

  return (
    <div className="grid gap-5 md:gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
