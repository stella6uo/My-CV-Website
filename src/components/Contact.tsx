import { profile, contactLine } from "@/data/content";
import { Container, Button } from "./ui";
import { Mail } from "./icons";

const display = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// The remittance slip: a dashed tear line, then the contact details as fields.
export function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: "LinkedIn", value: display(profile.linkedin), href: profile.linkedin, external: true },
    { label: "CV", value: "Download PDF", href: profile.cvHref, external: true },
  ];

  return (
    <section id="contact" className="pt-20 sm:pt-24">
      <Container>
        <div className="enter border-t-2 border-dashed border-rule-strong pt-3">
          <p className="eyebrow">Contact</p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className="display-md text-ink">Looking for someone who gets the numbers right?</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-ink-muted">{contactLine}</p>
              <div className="no-print mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Email me
                </Button>
                <Button href={profile.cvHref} variant="secondary" external withArrow>
                  Download CV
                </Button>
              </div>
            </div>

            <dl className="self-end border-t border-ink font-mono text-sm">
              {rows.map((r) => (
                <div key={r.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-3">
                  <dt className="pt-0.5 text-xs uppercase tracking-[0.1em] text-ink-subtle">{r.label}</dt>
                  <dd className="min-w-0 break-words">
                    <a
                      href={r.href}
                      className="link text-ink"
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {r.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      <footer className="mt-20 border-t border-rule">
        <Container className="flex flex-col justify-between gap-2 py-8 font-mono text-xs uppercase tracking-[0.08em] text-ink-subtle sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p>Leeds, UK · Every figure checked against source</p>
        </Container>
      </footer>
    </section>
  );
}
