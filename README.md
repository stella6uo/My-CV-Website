# Anson Ng — personal site

Single-page personal site. Next.js 16 (App Router) + Tailwind v4, built on the
Linear design system (see [`DESIGN.md`](./DESIGN.md)). Dark canvas, lavender accent.

## Run locally

```bash
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## How to make it yours (no code needed)

Everything you'd want to change lives in **`src/data/content.ts`**:

- **Links** — search for `TODO` and replace:
  - `linkedin` → your real LinkedIn URL
  - `github` → your GitHub profile
  - project `repoHref` → uncomment + add GitHub repo links for the Trading Journal and Signal Bot
- **CV** — drop your CV PDF into `public/cv.pdf` (the Download CV buttons point there).
- **Project screenshots** — drop images into `public/projects/`:
  - `signal-bot.png`, `trading-journal.png`, `sheepmaimai.png`, `casabrew.png`
  - Until then, clean placeholder frames show automatically. Recommended ratio ~16:10.

## Deploy (free)

1. Push this `site/` folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) → deploy. You'll get a
   free `your-name.vercel.app` URL.
3. Add a custom domain later in Vercel → Settings → Domains (~£10/yr).

## Structure

```
src/
  app/
    layout.tsx       fonts (Inter / JetBrains Mono), metadata
    globals.css      design tokens (colors, type scale) — from DESIGN.md
    page.tsx         composes the sections
  components/        Nav, Hero, Projects, Experience, Skills, Contact, ui, icons
  data/content.ts    ← all editable content lives here
```
