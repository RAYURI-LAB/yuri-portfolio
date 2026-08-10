import Image from "next/image";
import Link from "next/link";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-surface-muted"
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Tag>{project.category}</Tag>
          <Tag>{project.status}</Tag>
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2">
          <ProjectLinks
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl}
          />
        </div>
      </div>
    </article>
  );
}
