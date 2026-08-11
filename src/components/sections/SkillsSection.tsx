import { SkillGroup } from "@/components/skills/SkillGroup";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";

export function SkillsSection() {
  const coreSkills = skills.filter((group) => group.scope === "core");
  const currentSkills = skills.filter((group) => group.scope === "current");

  const scopes = [
    { key: "core", label: "Core", note: "경력 전반", groups: coreSkills },
    {
      key: "current",
      label: "Current",
      note: "현재 프로젝트",
      groups: currentSkills,
    },
  ];

  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="기술 스택"
      description="경력 전반에서 사용한 핵심 기술과, 현재 프로젝트 환경에서 사용하는 기술을 구분해 정리했습니다."
      className="border-y border-border bg-surface-muted/50"
    >
      <div className="space-y-14 md:space-y-16">
        {scopes.map((scope) => (
          <div key={scope.key} className="reveal">
            <div className="mb-7 flex items-baseline gap-3">
              <h3 className="label-mono text-xs tracking-[0.24em] text-foreground">
                {scope.label}
              </h3>
              <span className="text-xs text-subtle">· {scope.note}</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {scope.groups.map((group) => (
                <SkillGroup
                  key={`${scope.key}-${group.category}`}
                  group={group}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
