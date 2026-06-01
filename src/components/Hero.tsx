import { profile, languages } from "@/data/content";
import { Container, Button } from "./ui";
import { Mail, LinkedIn } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="dot-grid" aria-hidden="true" />
      <Container className="pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-accent mb-5">
            {profile.location} · Available for UK roles
          </p>

          <h1 className="display-xl text-gradient">
            {profile.tagline.replace(/\.$/, "")}
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {profile.subtagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={profile.cvHref} external withArrow>
              Download CV
            </Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              <Mail className="h-4 w-4" />
              Email me
            </Button>
            <Button href={profile.linkedin} variant="secondary" external>
              <LinkedIn className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-subtle">
            {languages.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
