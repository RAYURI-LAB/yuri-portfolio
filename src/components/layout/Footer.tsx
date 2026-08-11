import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono text-[0.7rem] tracking-[0.26em] text-subtle">
              MES · Digital Factory · Web UI
            </p>
            <p className="font-display mt-4 text-2xl font-medium text-foreground md:text-3xl">
              {profile.name}
              <span aria-hidden className="text-accent">
                .
              </span>
            </p>
            <p className="mt-2 text-sm text-muted">{profile.title}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {profile.emailAvailable ? (
              <a
                href={`mailto:${profile.email}`}
                className="label-mono text-[0.7rem] tracking-[0.18em] text-muted transition-colors duration-300 hover:text-accent-ink"
              >
                Email
              </a>
            ) : null}
            {profile.socials
              .filter((social) => social.available)
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group label-mono inline-flex items-center gap-1 text-[0.7rem] tracking-[0.18em] text-muted transition-colors duration-300 hover:text-accent-ink"
                >
                  {social.label}
                  <ArrowUpRight
                    className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              ))}
            <Link
              href="/#top"
              className="label-mono text-[0.7rem] tracking-[0.18em] text-muted transition-colors duration-300 hover:text-accent-ink"
            >
              Top
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="label-mono text-[0.65rem] tracking-[0.2em] text-subtle">
            © {year} {profile.name}
          </p>
          <p className="label-mono text-[0.65rem] tracking-[0.2em] text-subtle">
            Designed &amp; Built by {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
