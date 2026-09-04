import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-bg">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <SectionHeading id="experience-heading" eyebrow="Experience" title="Where I've worked" />
        </Reveal>

        <ol className="mt-10 space-y-10 border-l border-border pl-8">
          {experience.map((item, index) => (
            <li key={`${item.role}-${item.period}`} className="relative">
              <span
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
                aria-hidden="true"
              />
              <Reveal delay={Math.min(index, 4) * 60}>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{item.role}</h3>
                {item.organization ? (
                  <p className="text-sm text-ink-muted">
                    {[item.organization, item.location].filter(Boolean).join(" · ")}
                  </p>
                ) : (
                  <p className="text-sm text-ink-muted">{item.location}</p>
                )}
                <ul className="mt-3 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted/60" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <PhotoStrip photos={item.photos ?? []} />
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
