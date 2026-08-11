import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="연락처"
      description="프로젝트나 협업 관련 문의는 이메일 또는 GitHub로 연락해 주세요."
      className="border-t border-border bg-surface"
    >
      <div className="reveal rounded-[var(--radius-lg)] border border-border bg-background p-7 md:p-12">
        <dl className="grid gap-8 sm:grid-cols-2 sm:gap-12">
          <div>
            <dt className="label-mono text-[0.68rem] tracking-[0.22em] text-subtle">
              Email
            </dt>
            <dd className="mt-3">
              {profile.emailAvailable ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-1.5 text-base font-medium break-all text-foreground transition-colors duration-300 hover:text-accent-ink md:text-lg"
                >
                  {profile.email}
                  <ArrowUpRight
                    className="size-4 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
                    aria-hidden
                  />
                </a>
              ) : (
                <p className="text-base font-medium text-muted">
                  추후 입력 예정
                </p>
              )}
            </dd>
          </div>

          {profile.socials.map((social) => (
            <div key={social.label}>
              <dt className="label-mono text-[0.68rem] tracking-[0.22em] text-subtle">
                {social.label}
              </dt>
              <dd className="mt-3">
                {social.available ? (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-base font-medium break-all text-foreground transition-colors duration-300 hover:text-accent-ink md:text-lg"
                  >
                    {social.href.replace(/^https?:\/\//, "")}
                    <ArrowUpRight
                      className="size-4 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
                      aria-hidden
                    />
                  </a>
                ) : (
                  <p className="text-base font-medium text-muted">
                    {social.label} · 추후 입력 예정
                  </p>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-8">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          <p className="text-sm font-medium text-foreground">{profile.name}</p>
          <p className="label-mono text-[0.65rem] tracking-[0.2em] text-subtle">
            {profile.title}
          </p>
        </div>
      </div>
    </Section>
  );
}
