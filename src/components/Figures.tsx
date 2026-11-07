import type { CSSProperties } from "react";
import { figures as list } from "@/data/content";
import { Container } from "./ui";
import { RollOnView } from "./RollOnView";

const DRUM = Array.from({ length: 20 }, (_, i) => i % 10);

// One figure as a row of drums, each resting on its digit (--n = 10 + digit),
// so the roll passes through a full turn before it lands. Screen readers get
// the plain value.
function Drums({ value, index }: { value: string; index: number }) {
  return (
    <>
      <span className="sr-only">{value}</span>
      <span className="drums" aria-hidden="true">
        {Array.from(value).map((ch, c) => {
          if (!/\d/.test(ch)) return <span key={c}>{ch}</span>;
          const nth = value.slice(0, c).replace(/\D/g, "").length; // digits before this one
          const style = { "--n": 10 + Number(ch), "--dl": `${index * 120 + nth * 70}ms` } as CSSProperties;
          return (
            <span key={c} className="drum">
              <span className="drum-col" style={style}>
                {DRUM.map((d, j) => (
                  <span key={j}>{d}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}

// The one dark band on the page. Big figures roll in like an adding machine,
// each with a numbered note saying where it comes from, like the notes to a
// set of accounts.
export function Figures() {
  return (
    <section aria-labelledby="figures-title" className="on-ink bg-ink text-paper">
      <Container className="py-14 sm:py-16">
        <h2 id="figures-title" className="sr-only">
          Key figures
        </h2>
        <RollOnView className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {list.map((f, i) => (
            <li key={f.id} className="enter border-t border-on-ink-rule pt-4">
              <p className="flex items-start font-mono text-[clamp(2.25rem,3.5vw+0.75rem,3.5rem)] font-medium leading-none tracking-[-0.04em] tabular-nums text-paper">
                <Drums value={f.value} index={i} />
                <a
                  href={`#note-${i + 1}`}
                  className="figure-note ml-1 font-mono text-xs font-normal leading-none tracking-normal text-red-on-ink hover:underline"
                  style={{ "--k": i } as CSSProperties}
                  aria-label={`Note ${i + 1}, source`}
                >
                  {i + 1}
                </a>
              </p>
              <p className="mt-3 max-w-[16rem] text-sm leading-snug text-on-ink-muted">{f.label}</p>
            </li>
          ))}
        </RollOnView>

        <div className="mt-10 border-t border-on-ink-rule pt-4">
          <p className="eyebrow text-on-ink-muted">Notes to the figures</p>
          <ol className="mt-3 grid gap-x-10 gap-y-2 text-xs leading-relaxed text-on-ink-muted md:grid-cols-2">
            {list.map((f, i) => (
              <li key={f.id} id={`note-${i + 1}`} className="flex gap-2.5">
                <span className="font-mono text-red-on-ink">{i + 1}</span>
                <span>{f.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
