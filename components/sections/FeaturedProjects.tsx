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
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              Other Work
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-surface p-6 sm:flex sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold text-ink">{otherWork.title}</h3>
                <p className="mt-1 text-xs text-ink-muted">{otherWork.period}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {otherWork.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-0 sm:shrink-0">
                {otherWork.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
