import { Download, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-bg">
      <Container className="py-20 text-center sm:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let's talk"
            align="center"
          />
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {profile.contactClosing}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <SocialIconLink href={profile.linkedin} label="LinkedIn" icon={LinkedinIcon} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
