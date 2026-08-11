import { Section } from "@/components/ui/Section";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      index="05"
      eyebrow="Certifications"
      title="자격"
      description="보유 자격증을 간략히 정리했습니다."
      className="bg-background"
    >
      <ul className="reveal grid gap-5 md:grid-cols-2 md:gap-6">
        {certifications.map((cert) => (
          <li
            key={cert.id}
            className="group flex items-start justify-between gap-6 rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-colors duration-300 hover:border-gold md:p-8"
          >
            <div>
              <p className="font-display text-lg font-semibold text-foreground">
                {cert.name}
              </p>
              {cert.issuer ? (
                <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
              ) : null}
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150"
              />
              <span className="label-mono text-[0.7rem] tracking-[0.2em] text-muted">
                {cert.year}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
