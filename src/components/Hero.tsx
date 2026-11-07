import { Fragment, type CSSProperties, type ReactNode } from "react";
import { profile, languages, hero, type LedgerExample } from "@/data/content";
import { Container, Button, Tick } from "./ui";
import { Mail, LinkedIn } from "./icons";

// Start time for one step of the opening sequence (see .line-mask and
// .intro-fade in globals.css).
const at = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="ruled border-b border-rule">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow intro-fade">
            {profile.name} · {profile.headline} · {profile.location}
          </p>
          <h1 className="display-hero mt-6 text-ink">
            <span className="line-mask">
              <span style={at(0.1)}>{hero.lead}</span>
            </span>
            <span className="line-mask">
              <em style={at(0.18)}>{hero.join}</em>
            </span>
          </h1>
          <p className="intro-fade mt-7 max-w-xl text-lg leading-relaxed text-ink-muted" style={at(0.55)}>
            {hero.summary}
          </p>

          <div className="intro-fade no-print mt-9 flex flex-wrap gap-3" style={at(0.75)}>
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

          <p className="intro-fade mt-7 font-mono text-xs uppercase tracking-[0.08em] text-ink-subtle" style={at(0.85)}>
            {languages.join(" · ")}
          </p>
        </div>

        <LedgerCard ledger={hero.ledger} />
      </Container>
    </section>
  );
}

// A wrong value and its correction share one cell. CSS shows the wrong one
// first, then the correction; at rest only the correction is visible.
function Swap({ was, now }: { was: string; now: string }) {
  return (
    <span className="swap">
      <span className="swap-was" aria-hidden="true">
        {was}
      </span>
      <span className="swap-now">{now}</span>
    </span>
  );
}

// The opening check. Plays once on load (pure CSS, see .ledger-play in
// globals.css): rows tick off, the flagged row is caught and corrected, and a
// red double rule draws under the total.
function LedgerCard({ ledger }: { ledger: LedgerExample }) {
  const cols = ledger.head.length;
  const align = (c: number) => (c === 0 ? "text-left" : "pl-3 text-right");

  return (
    <div className="ledger-play min-w-0 border border-rule bg-card/70 p-4 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink pb-2.5 font-mono text-[0.7rem] uppercase tracking-[0.1em]">
        <span>{ledger.title}</span>
        <span className="text-ink-subtle">{ledger.tag}</span>
      </div>

      <table className="w-full border-collapse font-mono text-[0.8rem] tabular-nums sm:text-sm">
        <caption className="sr-only">{ledger.caption}</caption>
        <thead>
          <tr>
            {ledger.head.map((h, c) => (
              <th
                key={h}
                scope="col"
                className={`border-b border-rule pb-2 pt-4 font-medium text-ink-subtle ${align(c)}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ledger.rows.map((row, r) => {
            const flag = ledger.flag?.row === r ? ledger.flag : undefined;
            const delay = { "--i": r } as CSSProperties;
            return (
              <Fragment key={row[0]}>
                <tr className={`ledger-row ${flag ? "ledger-flag" : ""}`} style={delay}>
                  {row.map((cell, c) => {
                    const last = c === row.length - 1;
                    let content: ReactNode = cell;
                    if (flag && last) content = <Swap was={flag.diff} now={cell} />;
                    else if (flag?.swap?.col === c) content = <Swap was={flag.swap.wrong} now={cell} />;
                    return (
                      <td
                        key={c}
                        className={`${c === 0 ? "" : "whitespace-nowrap"} ${flag ? "pb-1 pt-2.5" : "border-b border-rule py-2.5"} ${align(c)}`}
                      >
                        {content}
                        {last && <Tick className="ml-1.5 h-3.5 w-3.5 align-[-2px]" />}
                      </td>
                    );
                  })}
                </tr>
                {flag && (
                  <tr className="ledger-row" style={delay}>
                    <td colSpan={cols} className="border-b border-rule pb-2.5 font-sans text-xs leading-snug text-red">
                      <span className="ledger-note inline-block">{flag.note}</span>
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="pt-4 text-left font-semibold">{ledger.total.label}</td>
            {Array.from({ length: cols - 2 }, (_, i) => (
              <td key={i} />
            ))}
            <td className="pl-3 pt-4 text-right font-semibold">
              <span className="total-rule">
                {ledger.flag ? <Swap was={ledger.flag.diff} now={ledger.total.value} /> : ledger.total.value}
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
