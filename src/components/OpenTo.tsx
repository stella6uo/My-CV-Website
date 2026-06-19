import { seeking } from "@/data/content";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

export function OpenTo() {
  return (
    <section
      id="open-to"
      className="scroll-mt-20 border-t border-hairline/60 py-20 sm:py-28"
    >
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Open to work</Eyebrow>
          <h2 className="display-md text-ink">
            Open to positions across the UK.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-subtle">{seeking.blurb}</p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {seeking.areas.map((area, i) => (
            <Reveal key={area} delay={i * 70}>
              <span className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-4 py-2 text-sm text-ink-muted ring-1 ring-hairline">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary/70"
                  aria-hidden="true"
                />
                {area}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
