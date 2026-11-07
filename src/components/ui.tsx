import { ArrowUpRight } from "./icons";

// Content column. On desktop the left padding leaves room for the red margin
// rule drawn by .ledger-page in globals.css.
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:pl-20 lg:pr-10 ${className}`}>
      {children}
    </div>
  );
}

// Section opener: mono eyebrow over a serif heading.
export function SectionHead({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-md mt-3 text-ink">{title}</h2>
    </div>
  );
}

// The ledger tick: a small red check mark.
export function Tick({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={`tick inline-block shrink-0 ${className}`} viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6.5l2.6 2.6L10 3.5" />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  withArrow?: boolean;
};

// Square, mono, ink. Plain anchors: every target is a file, mailto or another site.
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  withArrow = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {withArrow && <ArrowUpRight className="btn-arrow h-3.5 w-3.5" />}
    </a>
  );
}
