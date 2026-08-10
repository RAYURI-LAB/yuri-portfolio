import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100vh-var(--header-height))] overflow-hidden hero-atmosphere">
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />

      <div className="container-page relative flex min-h-[calc(100vh-var(--header-height))] flex-col justify-center py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Portfolio
          </p>
          <h1 className="font-display animate-fade-up animate-delay-1 mt-4 text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            {profile.name}
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-4 text-xl font-medium text-accent-ink md:text-2xl">
            {profile.title}
          </p>
          <p className="animate-fade-up animate-delay-3 mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>

          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-3">
            <Button href="/#projects" variant="primary">
              View projects
            </Button>
            <Button href="/#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-in animate-delay-3 pointer-events-none absolute right-[-8%] bottom-[-12%] hidden h-[22rem] w-[22rem] rounded-full border border-border/70 bg-accent/5 md:block"
          aria-hidden
        />
      </div>
    </section>
  );
}
