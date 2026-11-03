import sharp from "sharp";
import { writeFileSync } from "node:fs";

// LinkedIn personal banner — recommended 1584 x 396 (4:1)
const W = 1584;
const H = 396;

// ---- Design tokens (from DESIGN.md / globals.css) ----
const canvas = "#010102";
const surface1 = "#08090a";
const primary = "#5e6ad2";
const violet = "#7c5cff";
const hairline = "#23252a";
const ink = "#f7f8f8";
const inkMuted = "#d0d6e0";
const inkSubtle = "#8a8f98";

// Safe zone: on a personal profile LinkedIn overlays a circular avatar at the
// lower-left (~bottom 240px, left 300px get covered). Start the text block to
// the right of that zone and vertically centre it so nothing important is hidden.
const padL = 300;

// Build a faint dot-grid (matches globals.css: 22px grid, ~7% ink, masked top)
let dots = "";
const step = 22;
for (let y = step; y < H; y += step) {
  for (let x = step; x < W; x += step) {
    // radial mask from top-center: fade out toward bottom & far edges
    const dx = (x - W / 2) / (W * 0.42);
    const dy = (y - 0) / (H * 0.95);
    const d = Math.sqrt(dx * dx + dy * dy);
    const m = Math.max(0, 1 - d);
    const op = (0.07 * m).toFixed(3);
    if (op > 0.004) dots += `<circle cx="${x}" cy="${y}" r="1" fill="${ink}" opacity="${op}"/>`;
  }
}

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- headline gradient: bright ink -> lavender kiss -->
    <linearGradient id="ink" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"  stop-color="#ffffff"/>
      <stop offset="58%" stop-color="#c7c9e6"/>
      <stop offset="100%" stop-color="#8b8fd6"/>
    </linearGradient>

    <!-- soft lavender glow behind the headline (primary @ ~24%) -->
    <radialGradient id="glowA" cx="42%" cy="0%" r="62%">
      <stop offset="0%"  stop-color="${primary}" stop-opacity="0.30"/>
      <stop offset="70%" stop-color="${primary}" stop-opacity="0"/>
    </radialGradient>
    <!-- second glow, right side (violet @ ~18%) -->
    <radialGradient id="glowB" cx="86%" cy="12%" r="55%">
      <stop offset="0%"  stop-color="${violet}" stop-opacity="0.22"/>
      <stop offset="70%" stop-color="${violet}" stop-opacity="0"/>
    </radialGradient>

    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="26"/>
    </filter>

    <linearGradient id="accentBar" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${primary}"/>
      <stop offset="100%" stop-color="${violet}"/>
    </linearGradient>
  </defs>

  <!-- canvas (never pure black) -->
  <rect width="${W}" height="${H}" fill="${canvas}"/>

  <!-- atmosphere -->
  <g filter="url(#soft)">
    <rect width="${W}" height="${H}" fill="url(#glowA)"/>
    <rect width="${W}" height="${H}" fill="url(#glowB)"/>
  </g>

  <!-- dot grid texture -->
  <g>${dots}</g>

  <!-- subtle hairline along the very bottom edge -->
  <rect x="0" y="${H - 1}" width="${W}" height="1" fill="${hairline}" opacity="0.7"/>

  <!-- eyebrow: lavender lead-in bar + taxonomy text -->
  <g transform="translate(${padL}, 100)">
    <rect x="0" y="-9" width="22" height="2" rx="1" fill="${primary}"/>
    <text x="36" y="-3" font-family="Inter, Segoe UI, sans-serif" font-size="15"
          font-weight="500" letter-spacing="2.2" fill="${inkSubtle}">
      LEEDS, UK · AVAILABLE IMMEDIATELY
    </text>
  </g>

  <!-- headline (matches the site hero) -->
  <text x="${padL}" y="184" font-family="Inter, Segoe UI, sans-serif"
        font-size="76" font-weight="600" letter-spacing="-2.6" fill="url(#ink)">Finance,<tspan dx="22" fill="${primary}">reconciled.</tspan></text>

  <!-- subtagline -->
  <text x="${padL}" y="234" font-family="Inter, Segoe UI, sans-serif"
        font-size="22" font-weight="400" letter-spacing="-0.2" fill="${inkMuted}">Economics &amp; Finance graduate, looking for a role in finance operations.</text>

  <!-- pill row: skill chips, surface-1 cards with hairline borders -->
  <g transform="translate(${padL}, 278)" font-family="Inter, Segoe UI, sans-serif" font-size="15" font-weight="500">
    ${pillRow([
      "Reconciliations",
      "Invoice &amp; PO matching",
      "Advanced Excel",
      "Process automation",
    ])}
  </g>

  <!-- right-side mono signature -->
  <text x="${W - 60}" y="${H - 40}" text-anchor="end"
        font-family="JetBrains Mono, ui-monospace, monospace" font-size="14"
        letter-spacing="0.5" fill="${inkSubtle}" opacity="0.85">anson-ng-cv-finance.vercel.app</text>
</svg>`;

// Helper: render a horizontal row of "chips" by measuring rough text width.
function pillRow(labels) {
  let x = 0;
  let out = "";
  const padX = 16;
  const h = 32;
  const gap = 12;
  for (const label of labels) {
    const display = label.replace(/&amp;/g, "&");
    const w = Math.round(display.length * 8.0) + padX * 2;
    out += `
      <g transform="translate(${x}, 0)">
        <rect x="0" y="0" width="${w}" height="${h}" rx="8"
              fill="${surface1}" stroke="${hairline}" stroke-width="1"/>
        <text x="${w / 2}" y="${h / 2 + 5}" text-anchor="middle"
              fill="${inkMuted}">${label}</text>
      </g>`;
    x += w + gap;
  }
  return out;
}

writeFileSync("public/linkedin-banner.svg", svg);

await sharp(Buffer.from(svg), { density: 200 })
  .png()
  .toFile("public/linkedin-banner.png");

const meta = await sharp("public/linkedin-banner.png").metadata();
console.log(`Wrote public/linkedin-banner.png — ${meta.width}x${meta.height}`);
