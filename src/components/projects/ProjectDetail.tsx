import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/project";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const meta = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Period", value: project.periodLabel },
    ...(project.participationRate
      ? [{ label: "Share", value: project.participationRate }]
      : []),
  ];

  const sidebars = [
    { label: "Tech Stack", title: "사용 기술", items: project.techStack },
    { label: "Environment", title: "개발 환경", items: project.environment },
  ];

  return (
    <article className="pb-24 md:pb-32">
      <div className="border-b border-border bg-surface">
        <div className="container-page py-14 md:py-20">
          <Link
            href="/#projects"
            className="group label-mono inline-flex items-center gap-2.5 text-[0.7rem] tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
          >
            <ArrowLeft
              className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden
            />
            Back to Projects
          </Link>

          <p className="label-mono mt-12 text-[0.7rem] tracking-[0.3em] text-accent-ink">
            Project
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-3xl leading-[1.3] font-semibold text-foreground md:text-5xl md:leading-[1.22]">
            {project.title}
          </h1>

          <p className="keep-all mt-6 max-w-2xl text-base leading-[1.95] text-muted md:text-lg">
            {project.summary}
          </p>

          <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((row) => (
              <div key={row.label}>
                <dt className="label-mono text-[0.65rem] tracking-[0.2em] text-subtle">
                  {row.label}
                </dt>
                <dd className="keep-all mt-2 text-sm font-medium text-foreground">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container-page mt-16 grid gap-14 md:mt-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.8fr)] lg:gap-20">
        <div className="space-y-14">
          <section>
            <div className="flex items-center gap-5">
              <h2 className="label-mono text-[0.72rem] tracking-[0.24em] text-foreground">
                Overview
              </h2>
              <span aria-hidden className="rule-fade h-px flex-1" />
            </div>
            <p className="keep-all mt-7 text-base leading-[2] whitespace-pre-line text-muted">
              {project.description}
            </p>
          </section>

          {project.responsibilities.length > 0 ? (
            <section>
              <div className="flex items-center gap-5">
                <h2 className="label-mono text-[0.72rem] tracking-[0.24em] text-foreground">
                  Responsibilities
                </h2>
                <span aria-hidden className="rule-fade h-px flex-1" />
              </div>
              <ul className="mt-7">
                {project.responsibilities.map((item, index) => (
                  <li
                    key={item}
                    className="keep-all flex gap-5 border-b border-border/70 py-4 text-[0.95rem] leading-[1.9] text-muted last:border-b-0"
                  >
                    <span
                      aria-hidden
                      className="label-mono shrink-0 pt-1 text-[0.65rem] tracking-[0.18em] text-subtle"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="space-y-5 md:space-y-6">
          {sidebars.map((block) => (
            <div
              key={block.label}
              className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8"
            >
              <h2 className="label-mono text-[0.68rem] tracking-[0.22em] text-foreground">
                {block.label}
                <span className="sr-only"> {block.title}</span>
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </article>
  );
}
