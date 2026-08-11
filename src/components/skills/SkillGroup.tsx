import { Tag } from "@/components/ui/Tag";
import type { SkillGroup as SkillGroupType } from "@/types/skill";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong md:p-8">
      <div className="flex items-center gap-4">
        <h3 className="label-mono text-[0.7rem] tracking-[0.22em] text-foreground">
          {group.category}
          <span className="sr-only"> ({group.scope})</span>
        </h3>
        <span aria-hidden className="rule-fade h-px flex-1" />
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}
