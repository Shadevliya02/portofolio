# Sharla Devrina Aurelliya — Portfolio

Personal portfolio site for Sharla Devrina Aurelliya (Data Analyst & IT Support), built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Icons: [`lucide-react`](https://lucide.dev) (plus two hand-drawn brand icons for GitHub/LinkedIn — lucide-react no longer ships logo glyphs)
- No heavy UI/animation library — the scroll-reveal effect is a small custom hook (`components/ui/Reveal.tsx`) that respects `prefers-reduced-motion` and always falls back to visible content

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build (also type-checks)
npm run start   # serve the production build
npm run lint    # ESLint
```

## Editing content

All text/data lives in **`content/*.ts`** as typed objects — you can edit these without touching any component:

| File | Controls |
|---|---|
| `content/profile.ts` | Name, role line, contact info, links, education, About paragraphs |
| `content/skills.ts` | The 4 Core Skills groups + the small "Additional" skills line |
| `content/projects.ts` | The 3 featured case studies + the 1 "Other Work" card |
| `content/experience.ts` | Experience timeline |
| `content/certifications.ts` | Certifications & Awards list (set `highlight: true` to accent one) |
| `content/types.ts` | The TypeScript shape all of the above must match |

Anything still needing real information is marked `TODO: ...` inline — see **[`TODO.md`](./TODO.md)** for the full checklist (CV file, screenshots, LinkedIn/GitHub URLs, per-project numbers and insights). Find every remaining item with:

```bash
grep -rn "TODO" content/
```

## Replacing project screenshots

1. Drop image files into `public/projects/<slug>/` (`powerbi-dashboard`, `excel-data-cleaning`, or `python-eda`).
2. In `content/projects.ts`, add an entry to that project's `screenshots` array:
   ```ts
   screenshots: [
     { src: "/projects/powerbi-dashboard/01-overview.png", alt: "Overview page of the Power BI dashboard showing..." },
   ],
   ```
3. Write a descriptive `alt` for each image (accessibility + SEO). `caption` is optional.

Empty `screenshots` arrays render a "Screenshots coming soon" placeholder instead of a broken image — the site is safe to deploy before these are ready.

## Replacing the CV

Put the PDF at `public/cv/Sharla-Devrina-Aurelliya-CV.pdf` (exact filename). Both "Download CV" buttons already point to that path.

## Design system

- Colors, spacing tokens, dark-mode variables, and the scroll-reveal/print CSS all live in `app/globals.css` (Tailwind v4's CSS-first `@theme` config — there's no separate `tailwind.config.ts`).
- Dark mode is a manual toggle (`components/ui/ThemeToggle.tsx`) persisted to `localStorage`, defaulting to the OS preference on first visit. `components/ui/ThemeScript.tsx` applies the right class before paint to avoid a flash.
- Content max-width is capped around `1100px` via `components/ui/Container.tsx`.

## Deploying

### Vercel (recommended)

1. Push this repo to GitHub and import it in Vercel — zero extra config needed.
2. Set the environment variable **`NEXT_PUBLIC_SITE_URL`** to your final domain (used for `metadataBase`, Open Graph tags, and `sitemap.xml`/`robots.txt`). It falls back to a placeholder if unset — see `lib/site.ts`.

### Static export (GitHub Pages or any static host)

The app avoids server-only features (no route handlers, middleware, or server actions), so it's static-export-ready with a two-line change to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // static export can't use the on-demand image optimizer
};
```

Then:

```bash
npm run build
```

Static files are emitted to `out/`. For GitHub Pages under a repo subpath, also set `basePath`/`assetPrefix` in `next.config.ts` to match the repo name.

## Accessibility & SEO notes

- Semantic landmarks (`header`/`nav`/`main`/`footer`), a "Skip to content" link, and a full heading hierarchy (one `h1` per page).
- Per-page metadata, a generated Open Graph image (`app/opengraph-image.tsx`), `sitemap.ts`, and `robots.ts`.
- `app/projects/[slug]/page.tsx` statically pre-renders all 3 project pages via `generateStaticParams` (`dynamicParams = false`, so unknown slugs 404 instead of rendering on demand).
- Print styles (`@media print` in `app/globals.css`) hide navigation/buttons and force a clean light layout for the main page.
