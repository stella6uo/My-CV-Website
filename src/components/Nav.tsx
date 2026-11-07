import { profile } from "@/data/content";
import { Container, Tick } from "./ui";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Folio strip: name, availability, section links, CV.
export function Nav() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <Container>
        <nav className="flex h-14 items-center justify-between gap-6 font-mono text-[0.72rem] uppercase tracking-[0.1em]">
          <div className="flex items-center gap-5">
            <a href="#top" className="font-semibold text-ink">
              {profile.name}
            </a>
            <span className="hidden items-center gap-1.5 text-ink-subtle sm:inline-flex">
              <Tick className="h-3 w-3" />
              Available now
            </span>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-ink-subtle hover:text-ink">
                {l.label}
              </a>
            ))}
          </div>

          <a href={profile.cvHref} target="_blank" rel="noopener noreferrer" className="link font-semibold text-ink">
            Download CV
          </a>
        </nav>
      </Container>
    </header>
  );
}
