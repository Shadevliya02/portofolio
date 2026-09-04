# TODO — Konten yang Perlu Diisi

Semua item di bawah ini ditandai `TODO:` di kode (`content/*.ts`) supaya gampang dicari (`grep -rn "TODO" content/`). Situs sudah bisa di-build dan di-deploy sekarang — bagian yang belum diisi tampil sebagai placeholder yang jujur (link/foto dummy yang jelas berlabel "coming soon" / "replace with a real ..."), bukan link mati atau gambar rusak. Tapi sebaiknya diisi sebelum dibagikan ke recruiter.

## 1. File yang perlu ditaruh

- [ ] **CV PDF** → taruh di `public/cv/Sharla-Devrina-Aurelliya-CV.pdf` (nama file harus persis sama). Tombol "Download CV" di Hero & Contact sudah mengarah ke path ini.
- [ ] **Foto profil** (opsional) → taruh file di `public/`, lalu isi `photoUrl` di `content/profile.ts`. Kalau dikosongkan, hero tetap tampil rapi tanpa foto.
- [ ] **Foto pengalaman kerja (5 per entry)** → saat ini setiap item di `content/experience.ts` punya `photos: [...]` berisi 5 gambar dummy (`public/placeholders/experience-photo-1..5.png`). Ganti tiap entri dengan foto asli (path ke `public/experience/<nama-file>.jpg` misalnya) + tulis `alt` yang deskriptif. Boleh kurang dari 5 kalau fotonya belum ada semua — hapus saja entri yang belum ada isinya.
- [ ] **Screenshot Power BI** (2–4 gambar) → saat ini `powerbi-dashboard` pakai 2 gambar placeholder ilustratif di `public/placeholders/`. Ganti array `screenshots` di `content/projects.ts` dengan screenshot asli di `public/projects/powerbi-dashboard/`.
- [ ] **Screenshot before/after Excel** → sama, ganti 2 placeholder project `excel-data-cleaning` dengan screenshot asli di `public/projects/excel-data-cleaning/`.
- [ ] **Screenshot/grafik hasil EDA Python** → sama, ganti 2 placeholder project `python-eda` dengan screenshot asli di `public/projects/python-eda/`.

Format entri screenshot/foto: `{ src: "/path/dari/public", alt: "deskripsi gambar" }`.

## 2. Link profil

- [ ] `content/profile.ts` → `linkedin`: ganti `"TODO: isi URL LinkedIn"` dengan URL asli.
- [ ] `content/profile.ts` → `github`: ganti `"TODO: isi URL GitHub"` dengan URL asli.

Selama masih `TODO:`, ikon LinkedIn/GitHub di Hero, Contact, dan Footer otomatis tampil non-aktif (redup, tidak bisa diklik) alih-alih jadi link mati.

## 3. Bukti sertifikasi (`content/certifications.ts`)

- [ ] Isi `proofUrl` di keenam sertifikasi dengan link bukti asli (PDF, Google Drive, Credly, dll.). Selama masih `TODO:`, kartu sertifikasi menampilkan teks redup "Proof coming soon" alih-alih link mati.

## 4. Project — Power BI Sales & Performance Dashboard (`content/projects.ts`, slug `powerbi-dashboard`)

- [ ] `period` — periode pengerjaan.
- [ ] `problem` — pertanyaan bisnis utama yang dijawab dashboard.
- [ ] `data.source`, `data.rowsColumns`, `data.initialCondition`.
- [ ] Satu baris di `process` menyebut nama measure DAX penting — cari komentar `TODO: nama measure penting`.
- [ ] `keyInsights` — isi 3 insight bisnis asli.
- [ ] `impact` — tambahkan dampak terukur jika ada.

## 5. Project — Excel Data Cleaning & Standardization (slug `excel-data-cleaning`)

- [ ] `period`, `problem`, `data.source`, `data.rowsColumns` (isi jumlah baris **sebelum & sesudah**), `data.initialCondition`.
- [ ] `keyInsights`, `impact`.
- [ ] `beforeAfter` — tabel dirty/clean saat ini **contoh ilustratif generik** (bukan data asli, sudah diberi label "Illustrative example only"). Ganti dengan cuplikan data asli begitu tersedia.

## 6. Project — Python Exploratory Data Analysis (slug `python-eda`)

- [ ] `period`, `problem`, `data.source`, `data.rowsColumns`, `data.initialCondition`.
- [ ] `keyInsights`, `impact`.

## 7. Other Work — SEEDS System Documentation (Tugas Akhir)

- [ ] `content/projects.ts` → `otherWork[1].period`: isi periode pengerjaan Tugas Akhir.

## 8. Deployment

- [ ] Set environment variable `NEXT_PUBLIC_SITE_URL` ke domain final (Vercel atau custom domain) — dipakai untuk `metadataBase`, Open Graph, dan `sitemap.xml`/`robots.txt`. Default saat ini: `https://sharla-devrina.vercel.app` (lihat `lib/site.ts`).

## Cara cek progres

```bash
grep -rn "TODO" content/
```

Baris yang muncul berkurang setiap kali satu item di atas diisi.
