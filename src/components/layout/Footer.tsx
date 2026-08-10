import { ExternalLink } from "@/components/ui/ExternalLink";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Portfolio scaffold — content placeholders.
        </p>
        <ul className="flex flex-wrap gap-4">
          {profile.socials.map((social) => (
            <li key={social.href}>
              <ExternalLink href={social.href}>{social.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
