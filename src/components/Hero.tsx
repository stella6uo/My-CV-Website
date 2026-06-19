"use client";

import { useEffect, useRef, useState } from "react";
import { profile, languages } from "@/data/content";
import { Container, Button } from "./ui";
import { Mail, LinkedIn } from "./icons";

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// Total scroll length of the pinned intro (in viewport heights).
const SCROLL_LENGTH = 2.2;

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const aiRef = useRef<HTMLSpanElement | null>(null);
  const ticking = useRef(false);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [aiWidth, setAiWidth] = useState(0);

  // Measure the "+ AI" width so we can recentre the whole phrase as it lands.
  useEffect(() => {
    const el = aiRef.current;
    if (!el) return;
    const measure = () => setAiWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Respect reduced-motion: render everything visible, no pinning.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Map scroll position within the tall section to 0..1 progress.
  useEffect(() => {
    if (reduced) return;
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = clamp(-el.getBoundingClientRect().top, 0, total);
      setProgress(total > 0 ? scrolled / total : 0);
      ticking.current = false;
    };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  // Sub-range of progress → eased 0..1 for each stage.
  const seg = (a: number, b: number) =>
    reduced ? 1 : easeOut(clamp((progress - a) / (b - a), 0, 1));

  const ai = seg(0.04, 0.22); // "+ AI" joins
  const name = seg(0.26, 0.44); // name + eyebrow
  const headline = seg(0.48, 0.68); // descriptive line
  const cta = seg(0.56, 0.78); // buttons + languages
  const hint = reduced ? 0 : 1 - clamp(progress / 0.08, 0, 1);

  return (
    <section
      ref={ref}
      id="top"
      className="relative"
      style={{ height: reduced ? "auto" : `${SCROLL_LENGTH * 100}vh` }}
    >
      <div
        className={`${
          reduced ? "relative min-h-screen" : "sticky top-0 h-screen"
        } flex items-center overflow-hidden`}
      >
        <div className="hero-glow" aria-hidden="true" />
        <div className="dot-grid" aria-hidden="true" />

        <Container className="flex flex-col items-center py-24 text-center">
          {/* Stage 1 + 2 — "Finance" loads, "+ AI" joins on scroll */}
          <h1 className="rise hero-display">
            <span
              className="relative inline-block"
              style={{ transform: `translateX(${(-aiWidth / 2) * ai}px)` }}
            >
              <span className="text-gradient">Finance</span>
              <span
                ref={aiRef}
                className="absolute left-full top-0 whitespace-nowrap pl-[0.22em]"
                style={{
                  opacity: ai,
                  transform: `translateX(${(1 - ai) * 0.5}em)`,
                }}
                aria-hidden={ai < 0.5}
              >
                <span className="text-ink-subtle">+</span>{" "}
                <span className="text-primary">AI</span>
              </span>
            </span>
          </h1>

          {/* Stage 3 — name + eyebrow */}
          <div
            style={{
              opacity: name,
              transform: `translateY(${(1 - name) * 24}px)`,
            }}
            className="mt-10"
          >
            <p className="eyebrow eyebrow-accent inline-flex">
              {profile.location} · Available immediately
            </p>
            <p className="display-md mt-3 text-ink">{profile.name}</p>
          </div>

          {/* Stage 4 — headline */}
          <p
            style={{
              opacity: headline,
              transform: `translateY(${(1 - headline) * 24}px)`,
            }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted"
          >
            {profile.subtagline}
          </p>

          {/* Stage 4 — buttons + languages */}
          <div
            style={{
              opacity: cta,
              transform: `translateY(${(1 - cta) * 24}px)`,
            }}
            className="mt-9 flex flex-col items-center gap-7"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
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
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-subtle">
              {languages.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
        </Container>

        {/* Scroll hint — fades out as soon as they start */}
        {!reduced && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-ink-subtle"
            style={{ opacity: hint }}
            aria-hidden="true"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <span className="scroll-cue h-8 w-px bg-gradient-to-b from-ink-subtle to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
