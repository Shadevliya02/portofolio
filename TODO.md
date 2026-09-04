# TODO — Konten yang Perlu Diisi

Semua item di bawah ini ditandai `TODO:` di kode (`content/*.ts`) supaya gampang dicari (`grep -rn "TODO" content/`). Situs bisa di-build dan di-deploy tanpa mengisi ini — bagian yang belum diisi akan tampil sebagai placeholder yang jujur (bukan link mati atau gambar rusak), tapi sebaiknya diisi sebelum dibagikan ke recruiter.

## 1. File yang perlu ditaruh

- [ ] **CV PDF** → taruh di `public/cv/Sharla-Devrina-Aurelliya-CV.pdf` (nama file harus persis sama). Tombol "Download CV" di Hero & Contact sudah mengarah ke path ini.
- [ ] **Foto profil** (opsional) → taruh file di `public/`, lalu isi `photoUrl` di `content/profile.ts` (contoh: `"/profile-photo.jpg"`). Kalau dikosongkan, hero tetap tampil rapi dengan layout tipografis (tanpa kotak placeholder abu-abu).
- [ ] **Screenshot Power BI** (2–4 gambar PNG) → taruh di `public/projects/powerbi-dashboard/`, lalu tambahkan entrinya ke array `screenshots` project `powerbi-dashboard` di `content/projects.ts` (format: `{ src: "/projects/powerbi-dashboard/nama-file.png", alt: "deskripsi gambar" }`).
- [ ] **Screenshot before/after Excel** → taruh di `public/projects/excel-data-cleaning/`, tambahkan ke `screenshots` project `excel-data-cleaning`.
- [ ] **Screenshot/grafik hasil EDA Python** (2–3 gambar) → taruh di `public/projects/python-eda/`, tambahkan ke `screenshots` project `python-eda`.

Selama field `screenshots` sebuah project masih `[]` (kosong), halaman case study-nya menampilkan kotak "Screenshots coming soon" — bukan gambar rusak.

## 2. Link profil

- [ ] `content/profile.ts` → `linkedin`: ganti `"TODO: isi URL LinkedIn"` dengan URL asli.
- [ ] `content/profile.ts` → `github`: ganti `"TODO: isi URL GitHub"` dengan URL asli.

Selama masih `TODO:`, ikon LinkedIn/GitHub di Hero, Contact, dan Footer otomatis tampil non-aktif (redup, tidak bisa diklik) alih-alih jadi link mati.

## 3. Project — Power BI Sales & Performance Dashboard (`content/projects.ts`, slug `powerbi-dashboard`)

- [ ] `period` — periode pengerjaan.
- [ ] `problem` — pertanyaan bisnis utama yang dijawab dashboard.
- [ ] `data.source` — sumber data (+ link kalau dataset publik).
- [ ] `data.rowsColumns` — jumlah baris & kolom.
- [ ] `data.initialCondition` — kondisi data sebelum diproses.
- [ ] Satu baris di `process` menyebut nama measure DAX penting (mis. Total Sales, YoY Growth) — cari komentar `TODO: sebutkan nama measure DAX penting`.
- [ ] `keyInsights` — isi 3 insight bisnis asli (ganti 3 baris placeholder).
- [ ] `impact` — tambahkan dampak terukur jika ada (kalimat refleksi "what I learned"-nya sudah terisi, tinggal tambahkan bagian dampaknya).

## 4. Project — Excel Data Cleaning & Standardization (slug `excel-data-cleaning`)

- [ ] `period`, `problem`, `data.source`, `data.rowsColumns` (isi jumlah baris **sebelum & sesudah**), `data.initialCondition`.
- [ ] `keyInsights` — 3 insight asli.
- [ ] `impact` — tambahkan dampak terukur jika ada.
- [ ] `beforeAfter` — tabel dirty/clean saat ini **contoh ilustratif generik** (bukan data asli, sudah diberi label "Illustrative example only" di halaman). Ganti `columns`/`before`/`after` dengan cuplikan data asli dari project (tetap kecil, cukup beberapa baris) begitu tersedia.

## 5. Project — Python Exploratory Data Analysis (slug `python-eda`)

- [ ] `period`, `problem`, `data.source` (nama & sumber dataset, sertakan link jika publik), `data.rowsColumns`, `data.initialCondition`.
- [ ] `keyInsights` — 3 insight asli dari hasil EDA.
- [ ] `impact` — tambahkan dampak/hasil jika ada.

## 6. Deployment

- [ ] Set environment variable `NEXT_PUBLIC_SITE_URL` ke domain final (Vercel atau custom domain) — dipakai untuk `metadataBase`, Open Graph, dan `sitemap.xml`/`robots.txt`. Default saat ini: `https://sharla-devrina.vercel.app` (lihat `lib/site.ts`).

## Cara cek progres

```bash
grep -rn "TODO" content/
```

Baris yang muncul berkurang setiap kali satu item di atas diisi.
