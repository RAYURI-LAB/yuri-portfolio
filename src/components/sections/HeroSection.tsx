import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

function HeroMark() {
  return (
    <div
      aria-hidden
      className="animate-fade-in animate-delay-5 relative hidden aspect-square w-full max-w-[20rem] lg:block"
    >
      <span className="absolute inset-0 rounded-full border border-border" />
      <span className="motion-safe:animate-[spin_70s_linear_infinite] absolute inset-[13%] rounded-full border border-dashed border-accent/45" />
      <span className="absolute inset-[34%] rounded-full border border-border-strong/60" />

      <span className="absolute top-[-14%] left-1/2 h-[128%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
      <span className="absolute top-1/2 left-[-14%] h-px w-[128%] -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <span className="absolute top-0 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      <span className="absolute right-[4%] bottom-[14%] size-1.5 rounded-full bg-gold" />
      <span className="absolute top-[16%] left-[8%] size-1 rounded-full bg-border-strong" />

      <span className="label-mono absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.65rem] tracking-[0.28em] text-subtle">
        {profile.yearsExperience}+ Years
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="hero-atmosphere relative isolate overflow-hidden border-b border-border"
    >
      <div
        className="hero-grid pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="container-page relative flex min-h-[calc(100svh-var(--header-height))] flex-col justify-center py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div className="max-w-2xl">
            <p className="animate-fade-up label-mono text-[0.7rem] tracking-[0.3em] text-muted">
              <span className="text-accent-ink">00</span>
              <span aria-hidden className="mx-2 text-border-strong">
                /
              </span>
              Portfolio
            </p>

            <h1 className="animate-fade-up animate-delay-1 font-display mt-9 text-[2.5rem] leading-[1.28] font-light text-foreground sm:text-5xl md:text-[3.75rem] md:leading-[1.22]">
              안녕하세요,
              <br />
              <span className="font-semibold">{profile.name}</span>입니다
              <span aria-hidden className="text-accent">
                .
              </span>
            </h1>

            <p className="animate-fade-up animate-delay-2 label-mono mt-9 text-[0.72rem] tracking-[0.24em] text-muted sm:text-xs">
              {profile.title}
            </p>

            <p className="animate-fade-up animate-delay-3 keep-all mt-6 max-w-lg text-base leading-[1.95] text-muted md:text-lg">
              {profile.tagline}
            </p>

            <ul
              className="animate-fade-up animate-delay-4 mt-10 flex flex-wrap gap-2"
              aria-label="핵심 분야"
            >
              {profile.focusAreas.slice(0, 4).map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted"
                >
                  {area}
                </li>
              ))}
            </ul>

            <div className="animate-fade-up animate-delay-5 mt-12 flex flex-wrap gap-3">
              <Button href="/#projects" variant="primary">
                <span className="label-mono text-[0.7rem] tracking-[0.18em]">
                  View Projects
                </span>
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Button>
              <Button href="/#experience" variant="secondary">
                <span className="label-mono text-[0.7rem] tracking-[0.18em]">
                  Experience
                </span>
              </Button>
            </div>
          </div>

          <HeroMark />
        </div>
      </div>
    </section>
  );
}
