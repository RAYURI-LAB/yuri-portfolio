import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-accent hover:text-accent-ink focus-visible:ring-accent",
  ghost:
    "text-muted hover:bg-surface-muted hover:text-foreground focus-visible:ring-accent",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

interface SharedProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: undefined;
  };

type LinkButtonProps = SharedProps & {
  href: string;
  external?: boolean;
};

export type ButtonProps = NativeButtonProps | LinkButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const className = props.className ?? "";
  const classes = `${baseClass} ${variantClasses[variant]} ${className}`;

  if (isLinkButton(props)) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  const { variant: ignoredVariant, className: ignoredClassName, ...rest } =
    props;
  void ignoredVariant;
  void ignoredClassName;

  return <button type={rest.type ?? "button"} className={classes} {...rest} />;
}
