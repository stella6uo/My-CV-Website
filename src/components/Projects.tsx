import { projects, projectsIntro, type Project } from "@/data/content";
import { Container, SectionHead, Button, Tick } from "./ui";
import { ArrowUpRight } from "./icons";
import { ScreenshotPanel } from "./ScreenshotPanel";

function ProjectRow({ project }: { project: Project }) {
  const live = /live/i.test(project.status);
  return (
    <article className="enter grid gap-8 border-t border-ink pt-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
      <div className="no-print">
        <ScreenshotPanel project={project} />
      </div>
      <div>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-ink-subtle">
          {live && <Tick className="h-3.5 w-3.5" />}
          {project.status}
        </p>
        <h3 className="mt-3 font-display text-[2rem] leading-[1.05] tracking-[-0.01em] text-ink">
          {project.name}
        </h3>
        <p className="mt-2 text-lg text-ink">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-ink-muted">{project.description}</p>
        <p className="mt-5 font-mono text-xs uppercase leading-relaxed tracking-[0.06em] text-ink-subtle">
          {project.stack.join(" · ")}
        </p>

        {(project.liveHref || project.repoHref) && (
          <div className="no-print mt-6 flex flex-wrap items-center gap-5">
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
                className="link inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.06em] text-ink"
              >
                View code <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-rule py-20 sm:py-24">
      <Container>
        <SectionHead
          eyebrow={projectsIntro.eyebrow}
          title={projectsIntro.heading}
          className="enter max-w-3xl"
        />
        <div className="mt-12 space-y-16 sm:space-y-20">
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
