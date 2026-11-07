"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Rolls the figure drums once, when the strip comes into view (see .drum in
// globals.css). The server renders every drum resting on its value, so without
// script, or with reduced motion, the figures simply sit there.
export function RollOnView({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

    const play = () => {
      el.dataset.roll = "play";
    };

    // Already on screen when the page loads: roll straight away.
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.85 && box.bottom > 0) {
      play();
      return;
    }

    // Still below the fold: park the drums on 0, then roll when the strip arrives.
    el.dataset.roll = "armed";
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={ref} className={className}>
      {children}
    </ul>
  );
}
