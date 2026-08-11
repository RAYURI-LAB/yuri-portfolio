import type { CareerItem } from "@/types/career";

interface TimelineItemProps {
  item: CareerItem;
  isLast?: boolean;
}

export function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  return (
    <li className="reveal grid gap-3 md:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)] md:gap-10">
      <div className="md:pt-7 md:text-right">
        <p className="label-mono text-[0.7rem] tracking-[0.16em] text-muted">
          {item.periodLabel}
        </p>
      </div>

      <div
        className={`relative border-l border-border pl-7 md:pl-10 ${
          isLast ? "pb-0" : "pb-6 md:pb-10"
        }`}
      >
        <span
          aria-hidden
          className="absolute top-7 -left-[4.5px] size-[9px] rounded-full border border-accent bg-background"
        />

        <div className="group rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong md:p-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-xl font-semibold text-foreground md:text-[1.4rem]">
              {item.organization}
            </h3>
            <span className="text-sm text-subtle">{item.position}</span>
          </div>

          <p className="label-mono mt-3 text-[0.68rem] tracking-[0.18em] text-accent-ink">
            {item.role}
          </p>

          <p className="keep-all mt-5 text-[0.95rem] leading-[1.95] text-muted">
            {item.summary}
          </p>

          {item.responsibilities.length > 0 ? (
            <ul className="mt-6 grid gap-2.5 border-t border-border pt-6 sm:grid-cols-2 sm:gap-x-8">
              {item.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="keep-all flex gap-3 text-sm leading-[1.8] text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 size-1 shrink-0 rounded-full bg-accent/70"
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  );
}
