import { skills } from "@/data/content";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-hairline/60 py-20 sm:py-28">
      <Container>
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>Toolkit</Eyebrow>
          <h2 className="display-md text-ink">Skills.</h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 3) * 90}
              className="card-glow rounded-xl border border-hairline bg-surface-1 p-6 lift-edge"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-subtle">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-ink-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
