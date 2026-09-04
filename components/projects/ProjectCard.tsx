import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { ProjectDetail } from "@/content/types";

export function ProjectCard({ project }: { project: ProjectDetail }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        {project.focus}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <Badge key={tool}>{tool}</Badge>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        View case study
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
