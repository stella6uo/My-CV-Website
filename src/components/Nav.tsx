import { profile } from "@/data/content";
import { Container } from "./ui";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/60 bg-canvas/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-14 items-center justify-between">
          {/* Brand mark — one of the few places lavender is allowed */}
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-primary" aria-hidden="true" />
            {profile.name}
          </a>

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
