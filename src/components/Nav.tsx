"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import { Container } from "./ui";

const links = [
  { label: "Open to work", href: "#open-to" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "border-hairline bg-canvas/90 shadow-[0_1px_0_0_rgb(255_255_255/0.03),0_8px_24px_-16px_rgb(0_0_0/0.8)]"
          : "border-hairline/60 bg-canvas/80"
      }`}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between">
          {/* Brand mark — one of the few places lavender is allowed */}
          <div className="flex items-center gap-3">
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-primary" aria-hidden="true" />
              {profile.name}
            </a>

            {/* At-a-glance availability signal */}
            <a
              href="#open-to"
              className="hidden items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-muted ring-1 ring-hairline transition-colors hover:text-ink hover:ring-hairline-strong sm:inline-flex"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Immediately available
            </a>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-subtle transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-md bg-surface-1 px-3.5 text-sm font-medium text-ink ring-1 ring-hairline transition-colors hover:ring-hairline-strong hover:bg-surface-2"
          >
            Get in touch
          </a>
        </nav>
      </Container>
    </header>
  );
}
