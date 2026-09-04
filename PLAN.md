# PLAN — Portfolio Sharla Devrina Aurelliya

Ringkasan rencana implementasi sebelum coding dimulai. Lihat juga `TODO.md` (dibuat di akhir) untuk daftar konten asli yang perlu diisi pemilik.

## Stack

- Next.js 14+ (App Router) + TypeScript + Tailwind CSS
- Icon: `lucide-react`
- Tanpa UI library berat, tanpa animation library (animasi scroll pakai IntersectionObserver + CSS transition kecil, hormat `prefers-reduced-motion`)
- Kompatibel Vercel out-of-the-box; kompatibel static export (GitHub Pages) dengan toggle 1 baris di `next.config.ts` (didokumentasikan di README) karena tidak memakai fitur server-only (no route handlers, no middleware, no server actions)

## Struktur folder

```
portofolio/
├── PLAN.md, TODO.md, README.md
├── content/                     # semua teks/data, typed, tanpa menyentuh komponen
│   ├── types.ts                 # tipe: Profile, SkillGroup, ProjectDetail, ExperienceItem, Certification, dll
│   ├── profile.ts                # identitas, hero, about, education, contact
│   ├── skills.ts                  # 4 grup core skills + additional skills line
│   ├── projects.ts                # 3 featured project (case study) + 1 other-work item
│   ├── experience.ts              # timeline pengalaman
│   └── certifications.ts          # sertifikasi & penghargaan
├── lib/
│   └── utils.ts                   # helper kecil (cn(), isTodo())
├── components/
│   ├── layout/ (SiteHeader, SiteFooter, MobileNav)
│   ├── ui/ (Container, SectionHeading, Reveal, ThemeToggle, CopyEmailButton, SocialLink, Badge, PrintButton)
│   ├── sections/ (Hero, About, CoreSkills, FeaturedProjects, OtherWork, Experience, Certifications, Contact)
│   └── projects/ (ProjectCard, CaseStudyHeader, BeforeAfterTable, ScreenshotGallery)
├── app/
│   ├── layout.tsx, globals.css, page.tsx (single page, semua section + anchor nav)
│   ├── sitemap.ts, robots.ts, opengraph-image.tsx, not-found.tsx
│   └── projects/[slug]/page.tsx + opengraph-image.tsx (generateStaticParams dari content/projects.ts)
└── public/
    ├── cv/ (folder siap, file PDF asli = TODO)
    └── projects/<slug>/ (folder siap per project, screenshot asli = TODO)
```

## Skema tipe konten (ringkas)

- `Profile`: name, roleLine, subline, location, openTo, email, phone, linkedin, github, photoUrl?, cvUrl, education{degree, institution, location, period, honor, gpa, eprt}, about (array kalimat)
- `SkillGroup`: id, title, items[]; plus `additionalSkills: string[]` terpisah (baris kecil muted)
- `ProjectSummary` (untuk kartu): slug, title, summary, tools[], coverImage?
- `ProjectDetail` (halaman detail): meta (role, tools, period, repoUrl?), problem, data{source, rowsColumns, initialCondition}, process[], keyInsights[3], impact, screenshots[]{src, alt, caption?}, beforeAfter? (khusus excel-data-cleaning)
- `OtherWorkItem`: title, period, description, tech[]
- `ExperienceItem`: role, organization, location, period, bullets[]
- `Certification`: title, issuer, period, highlight?: boolean

## Halaman & komponen kunci

1. **Hero** — h1 nama, role line, subline, lokasi, tombol Download CV + Email me (copy-to-clipboard, live-region untuk status), ikon LinkedIn/GitHub (nonaktif otomatis jika value masih `TODO:` agar tidak ada link mati). Tanpa foto → layout tipografis, tanpa kotak abu-abu.
2. **About** — 3–4 kalimat dari draft yang diberikan (dirapikan tanpa mengubah makna).
3. **Core Skills** — 4 kartu grup + baris "Additional" kecil/muted di bawahnya.
4. **Featured Projects** — kartu besar 3 project → link ke `/projects/[slug]`; + 1 kartu "Other Work" (Kishenack) tanpa halaman detail.
5. **Experience** — timeline vertikal, bullet sesuai draft (data & IT framing, tidak diubah maknanya).
6. **Certifications & Awards** — 2 kolom, sertifikasi BNSP diberi badge/accent highlight.
7. **Contact** — email, LinkedIn, tombol CV, kalimat penutup posisi yang dicari.
8. **Case study `/projects/[slug]`** — Judul+ringkasan, meta bar, Problem, Data, Process (numbered), Key insights (3), Impact/Learned, Screenshot gallery+lightbox (placeholder "Screenshots coming soon" selama file belum ada). `excel-data-cleaning` dapat tambahan `BeforeAfterTable` dengan contoh ilustratif generik (diberi label "contoh ilustrasi" agar tidak diklaim sebagai data/metrik asli — angka baris asli tetap `TODO` di content).

## Data yang belum tersedia → `TODO.md`

Semua angka/metrik/link/file yang belum ada (LinkedIn, GitHub, CV PDF, screenshot 3 project, angka baris data, insight asli, nama dataset) ditulis eksplisit `TODO: isi ...` di content dan dikumpulkan ke `TODO.md` di root.

## Urutan pengerjaan

Setup proyek → content layer (types + 5 file content) → lib/utils → komponen UI dasar → komponen section → halaman utama → halaman case study + komponen project → SEO (metadata, sitemap, robots, OG image) → aksesibilitas & print CSS → `npm run build` sampai bersih → `README.md` & `TODO.md` final → commit & push.

---
Lanjut ke implementasi sekarang (tidak ada pertanyaan blocking — semua bagian yang belum jelas sudah tercakup oleh mekanisme `TODO.md` yang diminta prompt).
