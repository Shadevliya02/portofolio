# TODO — Konten yang Perlu Diisi

Semua item di bawah ini ditandai `TODO:` di kode (`content/*.ts`) supaya gampang dicari (`grep -rn "TODO" content/`). Situs sudah bisa di-build dan di-deploy sekarang — bagian yang belum diisi tampil sebagai placeholder yang jujur (link/foto dummy yang jelas berlabel "coming soon" / "replace with a real ..."), bukan link mati atau gambar rusak. Tapi sebaiknya diisi sebelum dibagikan ke recruiter.

## 1. File yang perlu ditaruh

- [ ] **CV PDF** → taruh di `public/cv/Sharla-Devrina-Aurelliya-CV.pdf` (nama file harus persis sama). Tombol "Download CV" di Hero & Contact sudah mengarah ke path ini.
- [ ] **Foto profil** (opsional) → taruh file di `public/`, lalu isi `photoUrl` di `content/profile.ts`. Kalau dikosongkan, hero tetap tampil rapi tanpa foto.
- [ ] **Foto pengalaman kerja (5 per entry)** → saat ini setiap item di `content/experience.ts` punya `photos: [...]` berisi 5 gambar dummy (`public/placeholders/experience-photo-1..5.png`). Ganti tiap entri dengan foto asli (path ke `public/experience/<nama-file>.jpg` misalnya) + tulis `alt` yang deskriptif. Boleh kurang dari 5 kalau fotonya belum ada semua — hapus saja entri yang belum ada isinya.
- [ ] **Screenshot KisheSnack** (3 gambar) → `content/projects.ts`, slug `kishesnack`, saat ini pakai 3 placeholder ilustratif di `public/projects/kishesnack/`. Ganti dengan screenshot asli (storefront, product page, cart/checkout, dst).
- [ ] **Foto/screenshot System Documentation** (3 gambar) → `content/projects.ts`, slug `system-documentation`, saat ini pakai 3 placeholder di `public/projects/system-documentation/`. Ganti dengan screenshot asli (User Manual, laporan UAT, diagram alur, dst).

Format entri foto: `{ src: "/path/dari/public", alt: "deskripsi gambar" }`. Layar Power BI, Excel, dan Python EDA sudah pakai screenshot asli.

## 2. Link profil

- [ ] `content/profile.ts` → `linkedin`: ganti `"TODO: isi URL LinkedIn"` dengan URL asli.
- [ ] `content/profile.ts` → `github`: ganti `"TODO: isi URL GitHub"` dengan URL asli.

Selama masih `TODO:`, ikon LinkedIn/GitHub di Hero, Contact, dan Footer otomatis tampil non-aktif (redup, tidak bisa diklik) alih-alih jadi link mati.

## 3. Bukti sertifikasi (`content/certifications.ts`)

- [ ] Isi `proofUrl` di keenam sertifikasi dengan link bukti asli (PDF, Google Drive, Credly, dll.). Selama masih `TODO:`, kartu sertifikasi menampilkan teks redup "Proof coming soon" alih-alih link mati.

## 4. Project — Python Exploratory Data Analysis (`content/projects.ts`, slug `python-eda`)

- [ ] `period` — isi periode pengerjaan (masih `"TODO: isi periode pengerjaan"`).

Setiap project di `content/projects.ts` sekarang punya bentuk yang sama dengan `content/experience.ts`: `role`, `period`, `bullets` (2–3 kalimat singkat), `tools`, dan `photos`. Kalau ada detail lain yang ingin ditonjolkan (angka baru, insight baru), edit langsung `bullets`-nya — tidak perlu struktur tambahan.

## 4a. Project — Freelance Commissions (`content/projects.ts`, slug `freelance-commissions`)

- [ ] `period` — isi rentang waktu ngerjain orderan freelance/joki-an ini (masih `"TODO: isi periode pengerjaan"`).
- [ ] Bullet ketiga — ganti dengan hasil konkret kalau ada (jumlah orderan, klien repeat order, atau satu deliverable yang paling dibanggakan).
- [ ] (Opsional) `photos` — belum ada sama sekali. Kalau punya contoh laporan/desain/UI yang bisa dipamerkan (dan boleh dipublish), tambahkan array `photos: [...]` seperti project lain.

## 4b. Project — Research Team Admin (`content/projects.ts`, slug `research-team-admin`)

- [ ] `title` — isi judul penelitiannya (masih `"TODO: isi judul penelitian"`).
- [ ] `period` — isi periode pengerjaan (masih `"TODO: isi periode pengerjaan"`).
- [ ] (Opsional) `photos` — belum ada. Tambahkan kalau ada foto tim/dokumentasi kegiatan yang boleh dipublish.

## 5. Deployment

- [ ] Set environment variable `NEXT_PUBLIC_SITE_URL` ke domain final (Vercel atau custom domain) — dipakai untuk `metadataBase`, Open Graph, dan `sitemap.xml`/`robots.txt`. Default saat ini: `https://sharla-devrina.vercel.app` (lihat `lib/site.ts`).

## Cara cek progres

```bash
grep -rn "TODO" content/
```

Baris yang muncul berkurang setiap kali satu item di atas diisi.
