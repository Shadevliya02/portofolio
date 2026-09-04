import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { ProjectDetail } from "@/content/types";

export function CaseStudyHeader({ project }: { project: ProjectDetail }) {
  return (
    <div className="border-b border-border bg-bg-alt">
      <Container className="py-14 sm:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {project.summary}
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 sm:grid-cols-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Role
            </dt>
            <dd className="mt-1 text-sm text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Tools
            </dt>
            <dd className="mt-1 text-sm text-ink">{project.tools.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Period
            </dt>
            <dd className="mt-1 text-sm text-ink">{project.period}</dd>
          </div>
          {project.repoUrl ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Repository
              </dt>
              <dd className="mt-1 text-sm">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  View repo <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </Container>
    </div>
  );
}
