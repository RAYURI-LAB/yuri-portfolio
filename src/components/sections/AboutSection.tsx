import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function AboutSection() {
  const facts = [
    { label: "Role", value: profile.title },
    { label: "Experience", value: `${profile.yearsExperience}+ Years` },
    {
      label: "Position",
      value: `${profile.position} · ${profile.department}`,
    },
    {
      label: "Education",
      value: profile.education.degree,
      note: `졸업 ${profile.education.graduatedAt}`,
    },
  ];

  return (
    <Section
      id="about"
      index="01"
      eyebrow="About Me"
      title="소개"
      description={profile.bio}
      className="bg-background"
    >
      <div className="reveal grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        <dl className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-2 border-b border-border px-6 py-6 last:border-b-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-6 md:px-8"
            >
              <dt className="label-mono text-[0.68rem] tracking-[0.2em] text-subtle">
                {fact.label}
              </dt>
              <dd>
                <span className="keep-all text-base font-medium text-foreground">
                  {fact.value}
                </span>
                {fact.note ? (
                  <span className="mt-1 block text-sm text-muted">
                    {fact.note}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>

        <div>
          <div className="flex items-center gap-5">
            <h3 className="label-mono text-[0.7rem] tracking-[0.24em] text-foreground">
              Focus Areas
            </h3>
            <span aria-hidden className="rule-fade h-px flex-1" />
          </div>

          <ol className="mt-7">
            {profile.focusAreas.map((area, index) => (
              <li
                key={area}
                className="group flex items-baseline gap-5 border-b border-border/70 py-4 last:border-b-0"
              >
                <span className="label-mono text-[0.68rem] tracking-[0.18em] text-subtle transition-colors duration-300 group-hover:text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="keep-all text-[0.95rem] text-foreground md:text-base">
                  {area}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
