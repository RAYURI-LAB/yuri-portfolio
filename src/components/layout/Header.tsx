"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${profile.name} 홈`}
        >
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150"
          />
          <span className="font-display text-base font-semibold text-foreground">
            {profile.name}
          </span>
          <span className="label-mono hidden text-[0.65rem] tracking-[0.22em] text-subtle sm:inline">
            Portfolio
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex lg:gap-9"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label-mono relative text-[0.7rem] tracking-[0.16em] text-muted transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border bg-surface p-2.5 text-foreground transition-colors duration-300 hover:border-border-strong md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
          aria-label="Mobile"
        >
          <ul className="container-page flex flex-col py-2">
            {siteConfig.nav.map((item, index) => (
              <li key={item.href} className="border-b border-border/60 last:border-0">
                <Link
                  href={item.href}
                  className="flex items-baseline gap-4 py-3.5 transition-colors duration-300 hover:text-accent-ink"
                  onClick={() => setOpen(false)}
                >
                  <span className="label-mono text-[0.65rem] tracking-[0.2em] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="label-mono text-xs tracking-[0.18em] text-foreground">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
