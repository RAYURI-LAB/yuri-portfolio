import { SkillGroup } from "@/components/skills/SkillGroup";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";

export function SkillsSection() {
  const coreSkills = skills.filter((group) => group.scope === "core");
  const currentSkills = skills.filter((group) => group.scope === "current");

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="기술 스택"
      description="경력 전반에서 사용한 핵심 기술과, 현재 프로젝트 환경에서 사용하는 기술을 구분해 정리했습니다."
      className="bg-surface-muted/40"
    >
      <div className="space-y-10">
        <div>
          <h3 className="mb-4 text-sm font-medium tracking-[0.12em] text-subtle uppercase">
            Core · 경력 전반
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreSkills.map((group) => (
              <SkillGroup key={`core-${group.category}`} group={group} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium tracking-[0.12em] text-subtle uppercase">
            Current · 현재 프로젝트
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {currentSkills.map((group) => (
              <SkillGroup key={`current-${group.category}`} group={group} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
