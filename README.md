# Anson Ng — personal site

Personal site. Next.js 16 (App Router) + Tailwind v4, built on the Ledger
design system (see [`DESIGN.md`](./DESIGN.md)): ledger-green paper, ruled
columns, mono figures, one red accent.

## Run locally

```bash
npm run dev     # http://localhost:3000
npm run build   # production build check
```

In Windows PowerShell, use `npm.cmd run dev` if `npm` is blocked by the
script execution policy.

## How to make it yours (no code needed)

Everything you'd want to change lives in **`src/data/content.ts`**:

- **Hero**: headline, summary and the opening ledger table (`hero`).
- **Figures** and their source notes (`figures`), **Open to work** copy (`seeking`).
- **Experience, education, modules, skills, projects** below that.
- **Links**: email and LinkedIn are in `profile`; search for `TODO` for anything still to confirm.
- **CV**: drop your CV PDF into `public/cv.pdf` (every Download CV button points there).
- **Project screenshots**: `public/projects/` (`signal-bot.png`,
  `trading-journal.png`, `sheepmaimai.png`, `casabrew.png`). A plain placeholder
  shows until an image exists. Recommended ratio ~16:10.

## Deploy (free)

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) and deploy. You'll get a
   free `your-name.vercel.app` URL.
3. Add a custom domain later in Vercel → Settings → Domains (~£10/yr).

## Structure

```
src/
  app/
    layout.tsx         fonts (Newsreader / IBM Plex Sans / IBM Plex Mono), metadata
    globals.css        design tokens, ledger animation, print styles (see DESIGN.md)
    page.tsx           composes the sections
  components/
    Nav, Hero, Figures, OpenTo, Experience, Skills, Projects, Contact, ui, icons
    RollOnView         rolls the figures when the dark band comes into view
    RulerTable         reading ruler that follows the mouse down a table
  data/content.ts      ← all editable content lives here
```
