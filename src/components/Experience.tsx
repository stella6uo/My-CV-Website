import type { CSSProperties } from "react";
import { experience, education, modules } from "@/data/content";
import { Container, SectionHead, Tick } from "./ui";
import { RulerTable } from "./RulerTable";

// Ledger entries: a date column on the left, the entry on the right. Each entry
// ticks off as it scrolls in: its top rule draws across, the red tick draws
// beside the date, and the text rises in steps (.ledger-entry in globals.css).
const entry = "ledger-entry grid gap-x-10 gap-y-2 py-8 md:grid-cols-[11rem_1fr]";
const dateCol =
  "entry-up flex items-start gap-2 font-mono text-xs uppercase tracking-[0.08em] text-ink-subtle md:pt-1.5";
const step = (s: number) => ({ "--s": s }) as CSSProperties;

function Rule() {
  return <span className="entry-rule" aria-hidden="true" />;
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-rule py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="Experience" title="Experience & education." className="enter" />

        <ol className="mt-12">
          {experience.map((job) => (
            <li key={`${job.role}-${job.org}`} className={entry}>
              <Rule />
              <p className={dateCol}>
                <Tick className="mt-px h-3.5 w-3.5" />
                {job.period}
              </p>
              <div>
                <h3 className="entry-up text-xl font-semibold tracking-[-0.01em] text-ink">{job.role}</h3>
                <p className="entry-up mt-1 text-ink-muted" style={step(1)}>
                  {job.org}
                </p>
                <ul className="entry-up mt-4 space-y-2.5" style={step(2)}>
                  {job.points.map((p, j) => (
                    <li
                      key={j}
                      className="relative max-w-3xl pl-5 leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-rule-strong"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}

          <li className={entry}>
            <Rule />
            <p className={dateCol}>
              <Tick className="mt-px h-3.5 w-3.5" />
              {education.period}
            </p>
            <div>
              <h3 className="entry-up text-xl font-semibold tracking-[-0.01em] text-ink">{education.degree}</h3>
              <p className="entry-up mt-1 text-ink-muted" style={step(1)}>
                {education.school} · {education.result}
              </p>
              <div className="entry-up mt-5 max-w-2xl" style={step(2)}>
                <RulerTable>
                  <table className="relative z-[1] w-full border-collapse text-sm">
                    <caption className="sr-only">Selected module marks</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="eyebrow pb-2 pl-3 text-left">
                          Module
                        </th>
                        <th scope="col" className="eyebrow pb-2 pr-3 text-right">
                          Mark
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {modules.map((m) => (
                        <tr key={m.name} className="border-t border-rule">
                          <td className="py-2.5 pl-3 pr-4 text-ink-muted">{m.name}</td>
                          <td className="py-2.5 pr-3 text-right font-mono tabular-nums text-ink">{m.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </RulerTable>
              </div>
              <p className="entry-up mt-4 text-sm text-ink-subtle" style={step(3)}>
                {education.note}
              </p>
            </div>
          </li>
        </ol>
      </Container>
    </section>
  );
}
