import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="pb-20 md:pb-28">
      <div className="border-b border-border bg-surface">
        <div className="container-page py-10 md:py-14">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to projects
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Tag>{project.category}</Tag>
            <Tag>{project.status}</Tag>
            {project.period ? <Tag>{project.period}</Tag> : null}
            {project.role ? <Tag>{project.role}</Tag> : null}
          </div>

          <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>

          <ProjectLinks
            className="mt-8"
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl}
          />
        </div>
      </div>

      <div className="container-page mt-10 grid gap-10 md:mt-14 md:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface-muted">
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Overview
            </h2>
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted">
              {project.description}
            </p>
          </section>

          {project.highlights && project.highlights.length > 0 ? (
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="h-fit rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)]">
          <h2 className="text-sm font-medium tracking-[0.12em] text-subtle uppercase">
            Tech stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
