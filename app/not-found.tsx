import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong"
      >
        Back to home
      </Link>
    </Container>
  );
}
