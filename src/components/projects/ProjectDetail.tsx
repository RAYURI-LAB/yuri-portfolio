import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
            프로젝트 목록
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Tag>{project.client}</Tag>
            <Tag>{project.periodLabel}</Tag>
            <Tag>{project.role}</Tag>
            {project.participationRate ? (
              <Tag>{`참여율 ${project.participationRate}`}</Tag>
            ) : null}
          </div>

          <h1 className="font-display mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="container-page mt-10 grid gap-10 md:mt-14 md:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              프로젝트 개요
            </h2>
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted">
              {project.description}
            </p>
          </section>

          {project.responsibilities.length > 0 ? (
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                주요 업무
              </h2>
              <ul className="mt-4 space-y-3">
                {project.responsibilities.map((item) => (
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

        <aside className="space-y-6">
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
            <h2 className="text-sm font-medium tracking-[0.12em] text-subtle uppercase">
              사용 기술
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6">
            <h2 className="text-sm font-medium tracking-[0.12em] text-subtle uppercase">
              개발 환경
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.environment.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
