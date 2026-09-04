import { Container } from "@/components/ui/Container";
import { SocialIconLink } from "@/components/ui/SocialIconLink";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.name}</p>
          <p className="text-sm text-ink-muted">{profile.roleLine}</p>
        </div>

        <div className="flex items-center gap-3">
          <SocialIconLink href={profile.linkedin} label="LinkedIn" icon={LinkedinIcon} />
          <SocialIconLink href={profile.github} label="GitHub" icon={GithubIcon} />
        </div>

        <p className="text-xs text-ink-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
