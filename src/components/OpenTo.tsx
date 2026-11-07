import { seeking } from "@/data/content";
import { Container, SectionHead } from "./ui";

export function OpenTo() {
  return (
    <section id="open-to" className="border-b border-rule py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="enter">
          <SectionHead eyebrow="Open to work" title={seeking.heading} />
          <p className="mt-5 max-w-xl leading-relaxed text-ink-muted">{seeking.blurb}</p>
        </div>

        <div className="enter self-end">
          <p className="eyebrow pb-3">{seeking.areasLabel}</p>
          <ul className="border-t border-ink">
            {seeking.areas.map((area) => (
              <li key={area} className="border-b border-rule py-3.5 text-[1.05rem] text-ink">
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-subtle">
            {seeking.learningNow}
          </p>
        </div>
      </Container>
    </section>
  );
}
