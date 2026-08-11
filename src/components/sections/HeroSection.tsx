import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="hero-atmosphere relative isolate overflow-hidden border-b border-border">
      <div
        className="hero-grid pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="container-page relative flex flex-col justify-center py-20 md:min-h-[calc(100vh-var(--header-height))] md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.14em] text-accent uppercase">
            {profile.yearsExperience} Years · MES · Web UI
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent-ink md:text-xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2" aria-label="핵심 분야">
            {profile.focusAreas.slice(0, 4).map((area) => (
              <span
                key={area}
                className="rounded-[var(--radius-sm)] border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/#projects" variant="primary">
              프로젝트 보기
            </Button>
            <Button href="/#experience" variant="secondary">
              경력 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
