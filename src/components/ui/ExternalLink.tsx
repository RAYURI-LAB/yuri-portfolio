import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className = "",
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover ${className}`}
    >
      {children}
      {showIcon ? <ArrowUpRight className="size-3.5" aria-hidden /> : null}
    </a>
  );
}
