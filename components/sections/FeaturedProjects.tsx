import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { otherWork, projects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-border bg-bg-alt">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Featured Projects"
            title="Selected data & reporting work"
            description="Three case studies covering the core of the role: dashboarding, data cleaning, and exploratory analysis."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80} variant="scale">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              Other Work
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {otherWork.map((work) => (
                <div
                  key={work.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <h3 className="text-lg font-semibold text-ink">{work.title}</h3>
                  <p className="mt-1 text-xs text-ink-muted">{work.period}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {work.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
