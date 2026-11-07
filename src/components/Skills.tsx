import { skills as groups } from "@/data/content";
import { Container, SectionHead } from "./ui";

// Three ruled columns.
export function Skills() {
  return (
    <section id="skills" className="border-b border-rule py-20 sm:py-24">
      <Container>
        <SectionHead eyebrow="Skills" title="Skills & tools." className="enter" />

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {groups.map((group) => (
            <div key={group.title} className="enter border-t border-ink">
              <h3 className="eyebrow pt-4 text-ink">{group.title}</h3>
              <ul className="mt-3">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-rule py-2.5 text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
