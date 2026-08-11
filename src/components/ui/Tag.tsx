interface TagProps {
  children: string;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium tracking-wide text-muted transition-colors duration-300 hover:border-accent/50 hover:bg-accent-soft/60 hover:text-accent-ink ${className}`}
    >
      {children}
    </span>
  );
}
