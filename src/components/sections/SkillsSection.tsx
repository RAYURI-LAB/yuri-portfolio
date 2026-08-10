import { SkillGroup } from "@/components/skills/SkillGroup";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech stack"
      description="Placeholder skill groups. Update categories and items in src/data/skills.ts."
      className="bg-surface-muted/50"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}
