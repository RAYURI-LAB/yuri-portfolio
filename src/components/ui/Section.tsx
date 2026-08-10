import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-[var(--header-height)] py-20 md:py-28 ${className}`}
    >
      <div className="container-page">
        <header className="mb-10 max-w-2xl md:mb-14">
          {eyebrow ? (
            <p className="mb-3 text-sm font-medium tracking-[0.14em] text-accent uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
