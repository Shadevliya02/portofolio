"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { projects } from "@/content/projects";
import { buttonClass } from "@/lib/utils";

const PAGE_SIZE = 4;

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

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

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={Math.min(index, 4) * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
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
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className={buttonClass("secondary")}
            >
              Load more projects
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
