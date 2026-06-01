import { experience, education } from "@/data/content";
import { Container, Eyebrow } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-hairline/60 py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: education + heading */}
          <div>
            <Eyebrow>Background</Eyebrow>
            <h2 className="display-md text-ink">Experience &amp; education.</h2>

            <div className="mt-10 rounded-xl border border-hairline bg-surface-1 p-6 lift-edge">
              <h3 className="text-lg font-medium text-ink">{education.degree}</h3>
              <p className="mt-1 text-ink-muted">{education.school}</p>
              <p className="mt-1 text-sm text-ink-subtle">
                {education.period} · {education.result}
              </p>
              <ul className="mt-4 space-y-2 border-t border-hairline pt-4">
                {education.modules.map((m) => (
                  <li key={m.name} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-ink-muted">{m.name}</span>
                    <span className="shrink-0 font-mono text-ink-subtle">{m.grade}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: experience timeline */}
          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.org}`}
                className="border-l border-hairline pl-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-medium text-ink">{job.role}</h3>
                  <span className="font-mono text-xs text-ink-subtle">{job.period}</span>
                </div>
                <p className="mt-0.5 text-primary/90">{job.org}</p>
                <ul className="mt-3 space-y-2">
                  {job.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-subtle">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-tertiary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
