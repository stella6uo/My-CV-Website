"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

// A reading ruler for a table: a band slides to whichever body row the mouse
// is over, like holding a ruler under a line of figures, and that row's last
// cell turns red. Mouse only; touch and keyboard users get the plain table.
// The table itself stays a Server Component, passed in as children.
export function RulerTable({ children, className = "" }: { children: ReactNode; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const ruler = useRef<HTMLDivElement>(null);
  const current = useRef<HTMLTableRowElement | null>(null);

  function moveTo(row: HTMLTableRowElement) {
    const w = wrap.current;
    const r = ruler.current;
    if (!w || !r || row === current.current) return;

    // On first appearance the band jumps to the row instead of sliding in from the top.
    const fresh = !("ruling" in w.dataset);
    if (fresh) r.dataset.snap = "";

    current.current?.removeAttribute("data-on");
    row.setAttribute("data-on", "");
    current.current = row;

    r.style.setProperty("--y", `${row.getBoundingClientRect().top - w.getBoundingClientRect().top}px`);
    r.style.setProperty("--h", `${row.offsetHeight}px`);

    if (fresh) {
      r.getBoundingClientRect(); // commit the jump before transitions come back
      delete r.dataset.snap;
    }
    w.dataset.ruling = "";
  }

  function clear() {
    if (wrap.current) delete wrap.current.dataset.ruling;
    current.current?.removeAttribute("data-on");
    current.current = null;
  }

  function onPointerOver(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const row = (e.target as Element).closest("tbody tr");
    if (row instanceof HTMLTableRowElement) moveTo(row);
  }

  return (
    <div ref={wrap} className={`ruler-table relative ${className}`} onPointerOver={onPointerOver} onPointerLeave={clear}>
      <div ref={ruler} className="ruler" aria-hidden="true" />
      {children}
    </div>
  );
}
