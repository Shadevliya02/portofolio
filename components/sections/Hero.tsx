import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";

export function Hero() {
  const hasPhoto = Boolean(profile.photoUrl);

  return (
    <section id="top" aria-label="Introduction" className="border-b border-border bg-bg">
      <Container
        className={
          hasPhoto
            ? "grid gap-10 py-20 sm:py-28 md:grid-cols-[1fr_auto] md:items-center"
            : "py-20 sm:py-28"
        }
      >
        <Reveal>
          <p className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-ink-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.location} · {profile.openTo}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">
            {profile.roleLine}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            {profile.subline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV (PDF)
            </a>
            <CopyEmailButton email={profile.email} />
            <div className="flex items-center gap-2">
              <SocialIconLink href={profile.linkedin} label="LinkedIn" icon={LinkedinIcon} />
              <SocialIconLink href={profile.github} label="GitHub" icon={GithubIcon} />
            </div>
          </div>
        </Reveal>

        {hasPhoto ? (
          <Reveal delay={100} className="justify-self-center md:justify-self-end">
            <Image
              src={profile.photoUrl}
              alt={`Portrait of ${profile.name}`}
              width={240}
              height={240}
              priority
              className="h-48 w-48 rounded-2xl object-cover ring-1 ring-border sm:h-60 sm:w-60"
            />
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
