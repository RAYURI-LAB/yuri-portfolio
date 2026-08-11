import type { ReactNode } from "react";

interface SectionHeaderProps {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`reveal ${className}`}>
      {index ? (
        <p className="label-mono text-[0.7rem] tracking-[0.3em] text-accent-ink">
          {index}
        </p>
      ) : null}

      {eyebrow ? (
        <div className="mt-3 flex items-center gap-5">
          <p className="label-mono text-sm tracking-[0.26em] text-foreground md:text-base">
            {eyebrow}
          </p>
          <span aria-hidden className="rule-fade h-px flex-1" />
        </div>
      ) : null}

      <div className="mt-7 grid gap-5 md:mt-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
        <h2 className="font-display text-[1.75rem] leading-[1.3] font-medium text-foreground md:text-[2.25rem]">
          {title}
        </h2>
        {description ? (
          <p className="keep-all max-w-2xl text-[0.95rem] leading-[1.95] text-muted md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}

interface SectionProps {
  id?: string;
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-[var(--header-height)] py-24 md:py-32 lg:py-40 ${className}`}
    >
      <div className="container-page">
        <SectionHeader
          index={index}
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-14 md:mb-20"
        />
        {children}
      </div>
    </section>
  );
}
