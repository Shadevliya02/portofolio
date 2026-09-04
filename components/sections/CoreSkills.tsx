import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/content/skills";

export function CoreSkills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-bg">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Core Skills"
            title="What I bring to the table"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.groups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60} variant="scale">
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <p className="mt-8 text-sm text-ink-muted/70">
            <span className="font-medium text-ink-muted">Additional:</span>{" "}
            {skills.additional}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
