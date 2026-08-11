import type { CareerItem } from "@/types/career";

interface TimelineItemProps {
  item: CareerItem;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <li className="relative grid gap-3 border-l border-border pl-6 md:grid-cols-[10.5rem_1fr] md:gap-8 md:border-l-0 md:pl-0">
      <div className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-accent md:hidden" />
      <div className="text-sm text-subtle md:pt-1 md:text-right">
        <p className="font-medium text-muted">{item.periodLabel}</p>
      </div>
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 md:p-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {item.organization}
          </h3>
          <span className="text-sm text-muted">{item.position}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
        {item.responsibilities.length > 0 ? (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {item.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex gap-2 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}
