import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-start justify-center py-24 md:py-32">
      <p className="text-sm font-medium tracking-[0.14em] text-accent uppercase">
        404
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The page or project you requested does not exist. It may have been
        removed, or the slug is incorrect.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" variant="primary">
          Go home
        </Button>
        <Button href="/#projects" variant="secondary">
          Browse projects
        </Button>
      </div>
      <p className="mt-6 text-sm text-subtle">
        Or{" "}
        <Link href="/" className="text-accent hover:text-accent-hover">
          return to the homepage
        </Link>
        .
      </p>
    </div>
  );
}
