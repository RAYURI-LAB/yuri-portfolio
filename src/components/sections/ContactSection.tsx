import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="연락처"
      description="프로젝트나 협업 관련 문의는 이메일 또는 GitHub로 연락해 주세요."
      className="bg-surface"
    >
      <div className="max-w-xl space-y-5 rounded-[var(--radius-lg)] border border-border bg-background p-6 md:p-8">
        <div>
          <p className="text-sm text-subtle">Email</p>
          {profile.emailAvailable ? (
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block text-base font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {profile.email}
            </a>
          ) : (
            <p className="mt-1 text-base font-medium text-muted">
              추후 입력 예정
            </p>
          )}
        </div>

        <div>
          <p className="text-sm text-subtle">GitHub</p>
          <ul className="mt-1 space-y-1">
            {profile.socials.map((social) => (
              <li key={social.label}>
                {social.available ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    {social.href.replace(/^https?:\/\//, "")}
                  </a>
                ) : (
                  <p className="text-base font-medium text-muted">
                    {social.label} · 추후 입력 예정
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
