import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="소개"
      description={profile.bio}
      className="bg-background"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5">
          <p className="text-sm text-subtle">경력</p>
          <p className="mt-2 font-display text-2xl font-semibold text-foreground">
            {profile.yearsExperience}년
          </p>
        </div>
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5">
          <p className="text-sm text-subtle">직위 · 부서</p>
          <p className="mt-2 text-base font-semibold text-foreground">
            {profile.position} · {profile.department}
          </p>
        </div>
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 sm:col-span-2 lg:col-span-1">
          <p className="text-sm text-subtle">학력</p>
          <p className="mt-2 text-base font-semibold text-foreground">
            {profile.education.degree}
          </p>
          <p className="mt-1 text-sm text-muted">
            졸업 {profile.education.graduatedAt}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium tracking-[0.12em] text-subtle uppercase">
          핵심 역량
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.focusAreas.map((area) => (
            <li key={area}>
              <Tag className="bg-accent-soft text-accent-ink">{area}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
