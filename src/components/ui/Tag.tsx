interface TagProps {
  children: string;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-sm)] bg-surface-muted px-2.5 py-1 text-xs font-medium tracking-wide text-muted ${className}`}
    >
      {children}
    </span>
  );
}
