import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span
        className={cn(
          "mb-3 block h-1 w-10 rounded-full bg-accent",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
