import { Section } from "@/components/ui/Section";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="자격"
      description="보유 자격증을 간략히 정리했습니다."
      className="bg-background"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <li
            key={cert.id}
            className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 md:p-6"
          >
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">
              {cert.name}
            </p>
            <p className="mt-2 text-sm text-muted">{cert.year}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
