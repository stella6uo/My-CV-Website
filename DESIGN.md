# Ledger Design System — site spec

The design source of truth for the site. The idea: the site is a well-kept
ledger. Pale columnar-pad paper, ruled columns, figures that line up, and an
opening table that checks itself. Every finance job checks tables of figures,
so the look suits operations, analysis and investment roles alike.

Replaces the earlier Linear-style dark system (retired 7 Nov 2026).

## Core characteristics
- Light, paper-first. Canvas is ledger green `#e7ede1`, never pure white.
- Hierarchy comes from rules (1px lines) and type, not cards, shadows or radius.
- One accent: ledger red `#b3261e`, used only for ticks, totals, note markers,
  corrections and the margin rule. Never as a fill.
- Square corners everywhere. No gradients, no glows, no rounded cards.
- Every figure shown on the page cites its source (the notes under the figures strip).

## Colors (tokens in `src/app/globals.css`)
| Token | Hex | Use |
|---|---|---|
| paper | #e7ede1 | page background |
| paper-deep | #dde5d6 | placeholder fills |
| card | #f2f5ee | the hero ledger card, screenshot frames |
| ink | #1b2a22 | headlines, primary text, primary button |
| ink-muted | #44564b | body text (6.5:1 on paper) |
| ink-subtle | #586a5e | labels, dates, footnotes (4.8:1 on paper) |
| rule | #b7c8b2 | 1px row and section rules |
| rule-strong | #8ea389 | link underlines, dashed tear line |
| red | #b3261e | ticks, double rules, note markers, corrections |
| on-ink-muted | #aebcab | labels and notes on the dark band (7.5:1 on ink) |
| on-ink-rule | #46594d | rules on the dark band |
| red-on-ink | #f08b80 | note markers on the dark band (6.2:1 on ink) |

Heavy rules (section tops) use `ink`; row rules use `rule`.

The figures strip is the one dark band on the page (ink background, paper
figures). It gives the page a beat right after the hero, on the strongest
numbers. Don't add a second one.

## Typography
- Display: **Newsreader** (variable, opsz axis), light 300 with italic 400 for the second line.
- Body: **IBM Plex Sans** 400/500/600.
- Figures, labels, tables, buttons: **IBM Plex Mono** with tabular numerals.
- Scale:
  - display-hero: 52 → 108px / 300 / 0.95 / -0.02em
  - display-md: 32 → 48px / 400 / 1.05 / -0.015em (section openers)
  - figure: 36 → 56px mono / 500 / tight tracking
  - entry title: 20px sans / 600
  - body-lg 18 / body 16 / small 14 / note 12
  - eyebrow: 12px mono / 500 / +0.1em / uppercase

## Layout
- Content column max 1200px. Desktop left padding leaves room for the red
  double margin rule (`.ledger-page::before`).
- Desktop layout starts at 960px (`--breakpoint-lg: 60rem`, not Tailwind's
  1024px), so small laptop windows and browsers zoomed to 150-175% still get
  two columns instead of the stacked tablet layout.
- Faint blue horizontal ruling (`.ruled`) behind the hero only.
- Sections are separated by full-width rules; each section opens with a mono
  eyebrow over a serif heading.
- Experience and education are ledger entries: an 11rem date column, then the entry.
- Contact is a remittance slip: dashed tear line, details as label/value fields.

## Components
- **Ledger card** (hero): mono table, rows tick off and a red double rule draws
  under the total. Optionally one flagged row is caught and corrected
  (`flag` in `hero.ledger`, `content.ts`).
- **Figures strip** (dark band): four big mono figures, each with a note number
  linking to "Notes to the figures". Each digit is a drum (`.drum`) so the
  figures can roll in.
- **Buttons**: `.btn-primary` (ink fill) and `.btn-secondary` (ink outline), mono
  uppercase, square, 44px tall. Secondary buttons fill with ink from the bottom
  on hover; a `.btn-arrow` nudges toward where the button goes.
- **Links**: `.link` has a faint rule at rest and a red underline that draws in
  on hover; nav section links (`.nav-link`) draw the red line with no resting rule.
- **Reading ruler** (`<RulerTable>`): wraps a table; a band with a red tab slides
  to the row under the mouse and that row's last cell turns red. Mouse only.
- **Tick**: 12px red check mark (`<Tick />`).
- **Screenshot frame**: card fill, 1px rule, 10px inset, image with its own rule.

## Motion
Recruiters skim a CV in about six seconds, mostly reading name, titles,
employers and dates. Motion points at those, finishes fast, and never hides them.

- **Opening sequence** (once on load, pure CSS): headline lines rise out of a
  mask (`.line-mask`, 0.1s and 0.18s), then the summary, buttons and languages
  fade up (`.intro-fade`, `--d` sets each start), then the ledger card ticks
  itself off. Headline readable by ~0.8s, everything done by ~2.6s.
- **Rolling figures**: when the dark band comes into view, each digit rolls to
  its value like an adding machine, then the note numbers appear
  (`<RollOnView>` sets `data-roll`). The server renders the final values, so
  no script means no roll, not wrong numbers.
- **Ledger entries** (Experience): as each entry scrolls in, its top rule draws
  across, the red tick draws beside the date, and the text rises in steps
  (`.ledger-entry`, `.entry-up`, `--s` for the step). Named view timeline, CSS only.
- **Quiet entrances** elsewhere (`.enter`) with `animation-timeline: view()`.
- Scroll-driven effects sit inside `@supports (animation-timeline: view())`;
  content is fully visible where unsupported.
- Animate transform and opacity only (plus the tick's stroke). Ease: `--ease-ledger`.
- Everything is complete at rest. `prefers-reduced-motion` shows the final frame,
  and print always shows final values.
- No scroll-jacking, pinned sections, smooth-scroll libraries, loops or tickers.

## Print
The page prints as a CV: navigation, buttons, screenshots and animation are
removed, the background goes white.

## Do / Don't
DO: keep figures in mono with tabular numerals; cite a source for every figure;
use red only for checks and corrections; keep rules faint; write example figures
as clearly labelled examples.
DON'T: add a second accent colour; use rounded cards, shadows or gradients; set
body text in the display serif; let the paper texture become a costume.
