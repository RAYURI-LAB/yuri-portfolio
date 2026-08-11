import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page flex flex-col gap-2 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Frontend / Web UI Developer.
        </p>
        <p className="text-sm text-subtle">MES · Digital Factory · Web UI</p>
      </div>
    </footer>
  );
}
