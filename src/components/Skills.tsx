import { skills } from "@/data/content";
import { Container, Eyebrow } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-hairline/60 py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Toolkit</Eyebrow>
          <h2 className="display-md text-ink">Skills.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
