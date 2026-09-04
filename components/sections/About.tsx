import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { profile } from "@/content/profile";

export function About() {
  const { education } = profile;

  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-border bg-bg-alt">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <SectionHeading id="about-heading" eyebrow="About" title="A quick introduction" />
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-4">
            {profile.about.map((sentence) => (
              <p key={sentence} className="text-lg leading-relaxed text-ink-muted">
                {sentence}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-wide">Education</p>
              </div>
              <p className="mt-3 text-base font-semibold text-ink">{education.degree}</p>
              <p className="text-sm text-ink-muted">
                {education.institution}, {education.location}
              </p>
              <p className="text-sm text-ink-muted">{education.period}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="accent">{education.honor}</Badge>
                <Badge>{education.gpa}</Badge>
                <Badge>{education.eprt}</Badge>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
