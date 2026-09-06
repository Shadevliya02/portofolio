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
| `content/projects.ts` | The Projects timeline — one entry per project, each with a role, short bullets, tools, and proof photos |
| `content/experience.ts` | Experience timeline (each entry supports up to 5 `photos`) |
| `content/certifications.ts` | Certifications & Awards list (`highlight: true` to accent one, `proofUrl` for a certificate link) |
| `content/types.ts` | The TypeScript shape all of the above must match |

Anything still needing real information is marked `TODO: ...` inline — see **[`TODO.md`](./TODO.md)** for the full checklist (CV file, screenshots, LinkedIn/GitHub URLs, per-project numbers and insights). Find every remaining item with:

```bash
grep -rn "TODO" content/
```

## Replacing project & experience photos

Every project and experience entry renders its `photos` array as a small clickable thumbnail strip (lightbox on click). The 4 data/research projects already ship real screenshots in `public/projects/<slug>/`; **KisheSnack** and **System Documentation** currently ship illustrative placeholder graphics (`public/projects/kishesnack/*.png`, `public/projects/system-documentation/*.png`, captioned "Placeholder — replace with a real screenshot"), and every experience entry ships placeholder photos (`public/placeholders/experience-photo-*.png`). None of the placeholders are real data — see `TODO.md`.

To replace them:

1. Drop your real image files into `public/projects/<slug>/` (project screenshots) or a folder of your choice (experience photos).
2. Update the corresponding `photos` array in `content/projects.ts` or `content/experience.ts`:
   ```ts
   photos: [
     { src: "/projects/kishesnack/storefront.png", alt: "Storefront page of the KisheSnack site showing..." },
   ],
   ```
3. Write a descriptive `alt` for each image (accessibility + SEO). `caption` is optional.

An empty/omitted `photos` array simply renders nothing — the site is safe to deploy at any point in between.

## Replacing the CV

Put the PDF at `public/cv/Sharla-Devrina-Aurelliya-CV.pdf` (exact filename). Both "Download CV" buttons already point to that path.

## Design system

- Colors, spacing tokens, dark-mode variables, and the scroll-reveal/print CSS all live in `app/globals.css` (Tailwind v4's CSS-first `@theme` config — there's no separate `tailwind.config.ts`).
- Dark mode is a manual toggle (`components/ui/ThemeToggle.tsx`) persisted to `localStorage`, defaulting to the OS preference on first visit. `components/ui/ThemeScript.tsx` applies the right class before paint to avoid a flash.
- Content max-width is capped around `1100px` via `components/ui/Container.tsx`.
- Shared pill-button styling lives in `buttonClass()` (`lib/utils.ts`); the lightbox used by both project screenshots and experience photos lives in `components/ui/Lightbox.tsx`.
- Images inside galleries/photo strips use `loading="eager"` deliberately — there are only a handful, and it avoids a class of bugs where native lazy-loading never triggers for a tool or crawler that renders the page without a real scroll.

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
- The whole site is a single page (`app/page.tsx`) — projects live inline in the Projects section rather than on separate case-study routes, so there's nothing to statically pre-render beyond `/`.
- Print styles (`@media print` in `app/globals.css`) hide navigation/buttons and force a clean light layout for the main page.
