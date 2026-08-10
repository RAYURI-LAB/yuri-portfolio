import { Tag } from "@/components/ui/Tag";
import type { SkillGroup as SkillGroupType } from "@/types/skill";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 md:p-6">
      <h3 className="text-sm font-medium tracking-[0.12em] text-subtle uppercase">
        {group.category}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}
