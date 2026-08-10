import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      description="Placeholder contact details. Replace email and social links when ready."
      className="bg-surface"
    >
      <div className="max-w-xl space-y-4 rounded-[var(--radius-lg)] border border-border bg-background p-6 md:p-8">
        <p className="text-sm text-muted">
          Location:{" "}
          <span className="font-medium text-foreground">{profile.location}</span>
        </p>
        <p className="text-sm text-muted">
          Email:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-accent transition-colors hover:text-accent-hover"
          >
            {profile.email}
          </a>
        </p>
        <ul className="flex flex-wrap gap-4 pt-2">
          {profile.socials.map((social) => (
            <li key={social.href}>
              <ExternalLink href={social.href}>{social.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
