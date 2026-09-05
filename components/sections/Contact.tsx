import { Download, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/content/profile";
import { buttonClass } from "@/lib/utils";

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
            <a href={`mailto:${profile.email}`} className={buttonClass("primary")}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <a href={profile.cvUrl} download className={buttonClass("secondary")}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <SocialIconLink href={"https://www.linkedin.com/in/sharla-devrina-aurelliya-98243614a"} label="LinkedIn" icon={LinkedinIcon} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
