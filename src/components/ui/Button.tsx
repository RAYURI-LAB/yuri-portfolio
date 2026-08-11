import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background hover:bg-[#3a3a3a]",
  secondary:
    "border border-border-strong bg-transparent text-foreground hover:border-accent hover:bg-accent-soft/60",
  ghost: "text-muted hover:bg-surface-muted hover:text-foreground",
};

const baseClass =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out";

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
