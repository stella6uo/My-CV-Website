import { profile } from "@/data/content";
import { Container, Button, Eyebrow } from "./ui";
import { Mail, LinkedIn, Github } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <Reveal className="rounded-2xl border border-hairline bg-surface-1 p-10 text-center lift-edge sm:p-16">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="display-md mx-auto max-w-2xl text-ink">
            Looking for an analyst who can also build the tools.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-subtle">
            Immediately available and open to positions across the UK — strongest in
            research, financial analysis, risk, wealth management and data. The fastest way
            to reach me is email.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${profile.email}`} withArrow>
              {profile.email}
            </Button>
            <Button href={profile.cvHref} variant="secondary" external>
              Download CV
            </Button>
          </div>
        </Reveal>
      </Container>

      <footer className="mt-20 border-t border-hairline/60">
        <Container className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
          <p className="text-sm text-ink-tertiary">
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <div className="flex items-center gap-5 text-ink-subtle">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-ink">
              <Mail className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink">
              <LinkedIn className="h-5 w-5" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </Container>
      </footer>
    </section>
  );
}
