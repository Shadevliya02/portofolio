import { Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { certifications } from "@/content/certifications";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="border-b border-border bg-bg-alt"
    >
      <Container className="py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            id="certifications-heading"
            eyebrow="Certifications & Awards"
            title="Credentials & recognition"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={Math.min(index, 5) * 50}>
              <div
                className={cn(
                  "flex h-full items-start gap-3 rounded-xl border p-5",
                  cert.highlight
                    ? "border-accent/40 bg-accent-soft"
                    : "border-border bg-surface",
                )}
              >
                {cert.highlight ? (
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                ) : null}
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      cert.highlight ? "text-accent-strong" : "text-ink",
                    )}
                  >
                    {cert.title}
                  </p>
                  {cert.issuer ? (
                    <p className="mt-0.5 text-sm text-ink-muted">{cert.issuer}</p>
                  ) : null}
                  <p className="mt-0.5 text-xs text-ink-muted">{cert.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
