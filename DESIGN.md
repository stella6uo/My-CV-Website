# Linear Design System — site spec

Source: getdesign.md/linear.app. This is the design source of truth for the site.
Adapted for a personal portfolio: where Linear leads sections with *product UI
screenshots*, this site leads with screenshots of Anson's real projects
(Casabrew, Trading Journal dashboard, Telegram bot output).

## Core characteristics
- Dark-canvas system. Canvas `#010102` (near-black, faint blue tint — never pure #000).
- Four-step surface ladder: canvas → surface-1 → surface-2 → surface-3 → surface-4.
  Hierarchy carried by surface lift + 1px hairline borders, NOT drop shadows.
- Single chromatic accent: lavender-blue `#5e6ad2` (hover `#828fff`, focus `#5e69d1`).
  Used scarcely: brand mark, primary CTA, focus ring, link emphasis. No second accent.
- Only semantic color: success green `#27a644`.
- Display type: weight 600, aggressive negative letter-spacing (-3px at 80px → 0 at body).
- Cards: 12px radius (`rounded-lg`), screenshot panels 16px (`rounded-xl`), buttons 8px. Never pill CTAs.

## Colors
| Token | Hex | Use |
|---|---|---|
| canvas | #010102 | page background |
| surface-1 | #08090a | cards, panels |
| surface-2 | #101113 | featured/hovered cards |
| surface-3 | #1a1b1e | sub-nav, dropdowns |
| surface-4 | #232428 | deepest lifted |
| hairline | #23252a | 1px borders |
| hairline-strong | #34363c | input focus rings |
| primary | #5e6ad2 | accent / CTA |
| primary-hover | #828fff | CTA hover |
| primary-focus | #5e69d1 | focus ring |
| ink | #f7f8f8 | headlines, emphasized body |
| ink-muted | #d0d6e0 | secondary text |
| ink-subtle | #8a8f98 | tertiary text, footer |
| ink-tertiary | #62666d | disabled, footnotes |
| success | #27a644 | status pills |

## Typography
- Family: Inter (closest free substitute for Linear's custom face), weights 400/500/600/700.
  Mono: JetBrains Mono / Geist Mono for code & ID tokens.
- Scale (size / weight / line-height / tracking):
  - display-xl 80 / 600 / 1.05 / -3.0px  (hero) — scales to ~36px mobile
  - display-lg 56 / 600 / 1.10 / -1.8px  (section openers)
  - display-md 40 / 600 / 1.15 / -1.0px
  - headline 28 / 600 / 1.20 / -0.6px
  - card-title 22 / 500 / 1.25 / -0.4px
  - subhead 20 / 400 / 1.40 / -0.2px
  - body-lg 18 / 400 / 1.50 / -0.1px
  - body 16 / 400 / 1.50 / -0.05px
  - body-sm 14 / 400 / 1.50 / 0
  - caption 12 / 400 / 1.40 / 0
  - button 14 / 500 / 1.20 / 0
  - eyebrow 13 / 500 / 1.30 / +0.4px  (positive tracking — marks taxonomy)

## Spacing (4px base)
xxs 4 · xs 8 · sm 12 · md 16 · lg 24 · xl 32 · xxl 48 · section 96
- Card padding: 24px (feature), 32px (testimonial), 48px (CTA banner).
- Max content width ~1280px. Card grids 3-up desktop / 2-up tablet / 1-up mobile.

## Radius
xs 4 · sm 6 · md 8 (buttons, inputs) · lg 12 (cards) · xl 16 (screenshot panels) · pill 9999 (status pills only)

## Components (key)
- button-primary: bg primary, 8px 14px padding, rounded-md, hover → primary-hover.
- button-secondary: bg surface-1, 1px hairline border, ink text, rounded-md.
- feature-card / project-card: bg surface-1, 1px hairline, rounded-lg, 24px padding.
- product-screenshot-card: bg surface-1, rounded-xl, 24px padding — the protagonist.
- status-badge: bg surface-2, ink-muted, caption, rounded-pill, 2px 8px.
- top-nav: bg canvas, 56px height, sticky.
- footer: bg canvas, ink-subtle, caption.

## Do / Don't
DO: keep canvas as anchor; use lavender only for brand/CTA/focus/links; use surface ladder for
hierarchy; pair display-600 with body-400; negative tracking on display; lead sections with a
project screenshot; 8px corners on CTAs.
DON'T: ship light mode; use lavender as a fill/background; add a 2nd accent; use gradients or
spotlight cards; pill-round CTAs; use #000000; combine multiple bright accents.
