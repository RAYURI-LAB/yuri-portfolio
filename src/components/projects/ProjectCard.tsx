import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/project";

/** Each project gets a faint identity colour — used only for hairlines, dots and hover tint. */
const accents = [
  { line: "#d88c9a", tint: "rgba(216, 140, 154, 0.05)", ink: "#a15a6b" },
  { line: "#d8b878", tint: "rgba(216, 184, 120, 0.07)", ink: "#8b6c2f" },
  { line: "#9fb6cd", tint: "rgba(159, 182, 205, 0.08)", ink: "#5b7590" },
  { line: "#a3bfa8", tint: "rgba(163, 191, 168, 0.08)", ink: "#5b7d63" },
];

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const accent = accents[index % accents.length];
  const number = String(index + 1).padStart(2, "0");

  const meta = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Period", value: project.periodLabel },
    ...(project.participationRate
      ? [{ label: "Share", value: project.participationRate }]
      : []),
  ];

  return (
    <article
      style={
        {
          "--card-line": accent.line,
          "--card-tint": accent.tint,
          "--card-ink": accent.ink,
        } as CSSProperties
      }
      className="reveal group relative rounded-[var(--radius-lg)] border border-border bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--card-line)] hover:bg-[var(--card-tint)] md:p-10"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="label-mono text-[0.72rem] tracking-[0.26em] text-subtle transition-colors duration-300 group-hover:text-[var(--card-ink)]">
          {number}
        </span>
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-[var(--card-line)] transition-transform duration-300 group-hover:scale-150"
        />
      </div>

      <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <h3 className="font-display text-xl leading-snug font-semibold text-foreground md:text-2xl">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors duration-300 group-hover:text-[var(--card-ink)] after:absolute after:inset-0 after:z-10 after:content-['']"
            >
              {project.title}
            </Link>
          </h3>

          <p className="keep-all mt-4 max-w-xl text-[0.95rem] leading-[1.95] text-muted">
            {project.summary}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <dl className="grid content-start gap-4 border-t border-border pt-7 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-14">
          {meta.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-4"
            >
              <dt className="label-mono text-[0.65rem] tracking-[0.2em] text-subtle">
                {row.label}
              </dt>
              <dd className="keep-all text-sm font-medium text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p
        aria-hidden
        className="label-mono mt-9 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] text-foreground"
      >
        View Project
        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </p>
    </article>
  );
}
