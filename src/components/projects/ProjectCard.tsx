import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Tag>{project.client}</Tag>
        <Tag>{project.periodLabel}</Tag>
      </div>

      <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-foreground md:text-[1.35rem]">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors hover:text-accent"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex flex-wrap gap-x-2">
          <dt className="text-subtle">역할</dt>
          <dd className="font-medium text-foreground">{project.role}</dd>
        </div>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          상세 보기
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
