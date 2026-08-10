import { Code2, ExternalLink as ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectLinksProps {
  githubUrl?: string;
  liveDemoUrl?: string;
  className?: string;
}

export function ProjectLinks({
  githubUrl,
  liveDemoUrl,
  className = "",
}: ProjectLinksProps) {
  if (!githubUrl && !liveDemoUrl) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {githubUrl ? (
        <Button href={githubUrl} external variant="secondary">
          <Code2 className="size-4" aria-hidden />
          GitHub
        </Button>
      ) : null}
      {liveDemoUrl ? (
        <Button href={liveDemoUrl} external variant="primary">
          <ExternalLinkIcon className="size-4" aria-hidden />
          Live Demo
        </Button>
      ) : null}
    </div>
  );
}
