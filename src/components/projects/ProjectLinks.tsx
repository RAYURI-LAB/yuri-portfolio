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
          <Code2 className="size-3.5" aria-hidden />
          <span className="label-mono text-[0.7rem] tracking-[0.18em]">
            GitHub
          </span>
        </Button>
      ) : null}
      {liveDemoUrl ? (
        <Button href={liveDemoUrl} external variant="primary">
          <ExternalLinkIcon className="size-3.5" aria-hidden />
          <span className="label-mono text-[0.7rem] tracking-[0.18em]">
            Live Demo
          </span>
        </Button>
      ) : null}
    </div>
  );
}
