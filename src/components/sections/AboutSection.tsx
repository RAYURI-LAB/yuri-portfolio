import { Timeline } from "@/components/career/Timeline";
import { Section } from "@/components/ui/Section";
import { career } from "@/data/career";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Career & background"
      description={profile.bio}
      className="bg-background"
    >
      <Timeline items={career} />
    </Section>
  );
}
