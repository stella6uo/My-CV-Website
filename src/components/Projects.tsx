import { projects, type Project } from "@/data/content";
import { Container, Eyebrow, Badge, Button } from "./ui";
import { ArrowUpRight } from "./icons";
import { ScreenshotPanel } from "./ScreenshotPanel";
import { Reveal } from "./Reveal";

function statusTone(status: string): "live" | "active" | "neutral" {
  if (/live/i.test(status)) return "live";
  if (/develop|progress|ongoing/i.test(status)) return "active";
  return "neutral";
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={flip ? "lg:order-2" : ""}>
        <ScreenshotPanel project={project} />
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <div className="mb-4">
          <Badge tone={statusTone(project.status)}>{project.status}</Badge>
        </div>
        <h3 className="text-[22px] font-medium tracking-tight text-ink">{project.name}</h3>
        <p className="mt-1 text-ink-muted">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-ink-subtle">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-muted ring-1 ring-hairline"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.liveHref || project.repoHref) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveHref && (
              <Button href={project.liveHref} external withArrow>
                {project.liveLabel ?? "View live"}
              </Button>
            )}
            {project.repoHref && (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-1.5 text-sm font-medium text-ink-subtle transition-colors hover:text-ink"
              >
                View code <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-hairline/60 py-20 sm:py-28">
      <Container>
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="display-md text-ink">
            Things I&apos;ve built where finance meets AI.
          </h2>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, i) => (
            <Reveal key={project.name}>
              <ProjectRow project={project} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
