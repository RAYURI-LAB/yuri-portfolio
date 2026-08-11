export type SkillScope = "core" | "current";

export interface SkillGroup {
  category: string;
  scope: SkillScope;
  items: string[];
}
