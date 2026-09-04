import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHeader } from "@/components/projects/CaseStudyHeader";
import { BeforeAfterTable } from "@/components/projects/BeforeAfterTable";
import { ScreenshotGallery } from "@/components/projects/ScreenshotGallery";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getProjectBySlug, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
    },
  };
}

function CaseStudySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section aria-labelledby={id} className="border-b border-border py-10 last:border-0 sm:py-12">
        <h2 id={id} className="text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-muted">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <CaseStudyHeader project={project} />

      <Container>
        <CaseStudySection id="problem-heading" title="Problem / Business Question">
          <p>{project.problem}</p>
        </CaseStudySection>

        <CaseStudySection id="data-heading" title="Data">
          <dl className="grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Source
              </dt>
              <dd className="mt-1 text-ink">{project.data.source}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Rows &amp; Columns
              </dt>
              <dd className="mt-1 text-ink">{project.data.rowsColumns}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Initial Condition
              </dt>
              <dd className="mt-1 text-ink">{project.data.initialCondition}</dd>
            </div>
          </dl>
        </CaseStudySection>

        <CaseStudySection id="process-heading" title="Process">
          <ol className="list-decimal space-y-3 pl-5 marker:font-semibold marker:text-accent">
            {project.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </CaseStudySection>

        {project.beforeAfter ? (
          <CaseStudySection id="before-after-heading" title="Before &amp; After">
            <BeforeAfterTable example={project.beforeAfter} />
          </CaseStudySection>
        ) : null}

        <CaseStudySection id="insights-heading" title="Key Insights">
          <ul className="space-y-3">
            {project.keyInsights.map((insight, index) => (
              <li key={insight} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-strong">
                  {index + 1}
                </span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection id="impact-heading" title="Impact / What I Learned">
          <p>{project.impact}</p>
        </CaseStudySection>

        <CaseStudySection id="screenshots-heading" title="Screenshots">
          <ScreenshotGallery screenshots={project.screenshots} />
        </CaseStudySection>
      </Container>
    </>
  );
}
