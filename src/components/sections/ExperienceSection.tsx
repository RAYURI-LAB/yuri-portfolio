import { Timeline } from "@/components/career/Timeline";
import { Section } from "@/components/ui/Section";
import { career } from "@/data/career";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="경력"
      description="제조 MES·Digital Factory와 웹 UI 중심으로 쌓아 온 회사 경력입니다."
      className="border-y border-border bg-surface-muted/50"
    >
      <Timeline items={career} />
    </Section>
  );
}
