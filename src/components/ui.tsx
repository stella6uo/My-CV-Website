import Link from "next/link";
import { ArrowUpRight } from "./icons";

// Max content width ~1280px per spec.
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

// Section eyebrow — positive tracking marks it as taxonomy (per spec).
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow eyebrow-accent mb-3">{children}</p>;
}

// Status pill — surface-2 bg, rounded-pill (spec: status-badge), with a tone dot.
type BadgeTone = "live" | "active" | "neutral";

export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
}) {
  const dot =
    tone === "live"
      ? "bg-success"
      : tone === "active"
        ? "bg-primary"
        : "bg-ink-tertiary";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-muted ring-1 ring-hairline">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  withArrow?: boolean;
};

// button-primary / button-secondary — 8px radius, never pill (spec).
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  withArrow = false,
}: ButtonProps) {
  const base =
    "group inline-flex h-10 items-center gap-1.5 rounded-md px-4 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover hover:shadow-[0_8px_24px_-8px_color-mix(in_srgb,var(--color-primary)_70%,transparent)]"
      : "bg-surface-1 text-ink ring-1 ring-hairline hover:ring-hairline-strong hover:bg-surface-2";

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {content}
    </Link>
  );
}
