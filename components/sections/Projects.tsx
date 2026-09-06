import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-border bg-bg-alt">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Things I've built & worked on"
            description="Data, research, and documentation work — with a few words on each and proof it actually happened."
          />
        </Reveal>

        <ol className="mt-10 space-y-10 border-l border-border pl-8">
          {projects.map((project, index) => (
            <li key={project.slug} className="relative">
              <span
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg-alt"
                aria-hidden="true"
              />
              <Reveal delay={Math.min(index, 4) * 60}>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {project.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{project.title}</h3>
                <p className="text-sm text-ink-muted">{project.role}</p>
                <ul className="mt-3 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted/60" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
                <PhotoStrip photos={project.photos ?? []} />
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
