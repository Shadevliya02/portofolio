import type { OtherWorkItem, ProjectDetail } from "./types";

export const projects: ProjectDetail[] = [
  {
    slug: "powerbi-dashboard",
    title: "Power BI Sales & Performance Dashboard",
    summary:
      "An interactive Power BI dashboard turning raw sales data into a decision-ready view of performance across products, regions, and time.",
    role: "Data Analyst (independent project)",
    tools: ["Power BI", "DAX", "Power Query"],
    period: "TODO: isi periode pengerjaan (mis. Jan–Feb 2025)",
    focus: "Data modeling, DAX measures, interactive dashboard, business insight",
    problem:
      "TODO: pertanyaan bisnis utama dashboard ini (contoh: produk/wilayah mana paling berkontribusi ke penjualan, dan bagaimana trennya?).",
    data: {
      source: "TODO: sumber data (mis. dataset penjualan internal atau publik + tautan)",
      rowsColumns: "TODO: jumlah baris & kolom data",
      initialCondition:
        "TODO: kondisi data sebelum diproses (tabel terpisah yang perlu direlasikan, kolom tidak konsisten, dll.).",
    },
    process: [
      "Imported raw data into Power BI and reviewed table structure and relationships.",
      "Cleaned and shaped data with Power Query — data types, column names, unused fields.",
      "Built a star-schema data model, relating fact and dimension tables.",
      "Wrote DAX measures for the core metrics (TODO: nama measure penting, mis. Total Sales, YoY Growth).",
      "Designed report pages and visuals around the business question, with filters for interactivity.",
      "Reviewed the dashboard against the original question and refined visuals for clarity.",
    ],
    keyInsights: [
      "TODO: insight #1 (contoh: kategori X menyumbang Y% penjualan meski volumenya paling rendah).",
      "TODO: insight #2 (contoh: wilayah/cabang tertentu menurun pada periode tertentu).",
      "TODO: insight #3 (contoh: pola musiman yang memengaruhi performa penjualan).",
    ],
    impact:
      "Strengthened my ability to model relational data and turn a business question into DAX measures and a dashboard non-technical stakeholders can read alone. TODO: dampak terukur jika ada (mis. waktu laporan lebih singkat, dipakai tim tertentu).",
    screenshots: [
      { src: "/placeholders/screenshot-powerbi-1.png", alt: "TODO: replace with a real screenshot of the dashboard overview page" },
      { src: "/placeholders/screenshot-powerbi-2.png", alt: "TODO: replace with a real screenshot of the trend/KPI detail page" },
    ],
  },
  {
    slug: "excel-data-cleaning",
    title: "Excel Data Cleaning & Standardization",
    summary:
      "Cleaning and standardizing a messy spreadsheet with Excel Power Query — deduplication, consistent formatting, validation rules.",
    role: "Data Analyst (independent project)",
    tools: ["Microsoft Excel", "Power Query"],
    period: "TODO: isi periode pengerjaan",
    focus: "Power Query, deduplication, format standardization, before/after",
    problem:
      "TODO: masalah data di balik project ini (contoh: data pelanggan/transaksi tersebar dengan format tidak konsisten, sulit direkap).",
    data: {
      source: "TODO: sumber data (mis. data internal atau publik + tautan)",
      rowsColumns: "TODO: jumlah baris & kolom sebelum dan sesudah cleaning",
      initialCondition:
        "TODO: kondisi awal data — masalah yang ditemukan (duplikat, format tanggal tidak konsisten, penulisan nama/telepon berbeda-beda, sel kosong, dll.).",
    },
    process: [
      "Imported the raw spreadsheet and reviewed column types, formats, and obvious quality issues.",
      "Used Power Query to remove duplicates and standardize inconsistent text casing.",
      "Standardized date and phone number formats across all rows.",
      "Applied validation rules to reduce future entry errors.",
      "Compared row counts before/after cleaning to confirm no unintended data loss.",
    ],
    keyInsights: [
      "TODO: insight #1 (contoh: persentase baris yang ternyata duplikat).",
      "TODO: insight #2 (contoh: jenis kesalahan format paling sering terjadi).",
      "TODO: insight #3 (contoh: dampak cleaning terhadap akurasi laporan berikutnya).",
    ],
    impact:
      "Sharpened my eye for inconsistent, real-world data and my ability to fix it systematically with Power Query instead of manual edits. TODO: dampak terukur jika ada (mis. waktu dihemat, jumlah duplikat dihapus).",
    screenshots: [
      { src: "/placeholders/screenshot-excel-1.png", alt: "TODO: replace with a real screenshot of the raw spreadsheet before cleaning" },
      { src: "/placeholders/screenshot-excel-2.png", alt: "TODO: replace with a real screenshot of the Power Query steps panel" },
    ],
    beforeAfter: {
      columns: ["Customer Name", "Phone Number", "Order Date", "City"],
      before: [
        ["john smith", "08123456789", "1/5/2024", "jakarta "],
        ["JOHN SMITH", "+62 812-3456-789", "2024/01/05", "Jakarta"],
        ["Jane doe", "0813-7777-888", "5-Jan-24", "JAKARTA"],
        ["Ahmad Fauzi", "081234567890", "2024-01-06", "Bandung"],
      ],
      after: [
        ["John Smith", "+62 812-3456-789", "2024-01-05", "Jakarta"],
        ["Jane Doe", "+62 813-7777-888", "2024-01-05", "Jakarta"],
        ["Ahmad Fauzi", "+62 812-3456-7890", "2024-01-06", "Bandung"],
      ],
      note: "Illustrative example only — replace with a real excerpt once available. Duplicate John Smith row merged; names, phone, dates, and city casing standardized (4 rows → 3 rows).",
    },
  },
  {
    slug: "python-eda",
    title: "Python Exploratory Data Analysis",
    summary:
      "Exploratory data analysis in Python — from raw data to descriptive statistics and visual patterns worth reporting.",
    role: "Data Analyst (independent project)",
    tools: ["Python", "pandas", "NumPy", "matplotlib", "seaborn", "Jupyter Notebook"],
    period: "TODO: isi periode pengerjaan",
    focus: "pandas, descriptive statistics, visualization, findings",
    problem:
      "TODO: pertanyaan yang ingin dijawab lewat EDA ini (contoh: faktor apa paling berkorelasi dengan [variabel target]?).",
    data: {
      source: "TODO: nama & sumber dataset (sertakan tautan jika publik)",
      rowsColumns: "TODO: jumlah baris & kolom data",
      initialCondition: "TODO: kondisi awal data (missing values, tipe data tidak sesuai, outlier, dll.).",
    },
    process: [
      "Loaded the dataset into Jupyter with pandas and inspected structure, types, and missing values.",
      "Cleaned the dataset — handled missing values, fixed types, removed irrelevant columns.",
      "Computed descriptive statistics (mean, median, distribution) for key variables.",
      "Visualized patterns with matplotlib and seaborn (histograms, boxplots, correlation heatmap).",
      "Summarized findings into key insights for a non-technical audience.",
    ],
    keyInsights: ["TODO: insight #1.", "TODO: insight #2.", "TODO: insight #3."],
    impact:
      "Built a repeatable workflow for turning a raw dataset into statistics and visuals behind a clear narrative. TODO: dampak/hasil jika ada (mis. rekomendasi yang dipakai, keputusan yang terbantu).",
    screenshots: [
      { src: "/placeholders/screenshot-python-1.png", alt: "TODO: replace with a real screenshot of the distribution plot" },
      { src: "/placeholders/screenshot-python-2.png", alt: "TODO: replace with a real screenshot of the correlation plot" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((project) => project.slug === slug);
}

export const otherWork: OtherWorkItem[] = [
  {
    title: "Kishenack — Snack Sales Web Application",
    period: "2025",
    description:
      "Web platform for snack sales with transaction history, sales reports, and product category management.",
    tech: ["CodeIgniter 3"],
  },
  {
    title: "System Documentation — SEEDS (New Student Registration) v3.7",
    period: "TODO: isi periode pengerjaan (Tugas Akhir)",
    description:
      "Final project (Tugas Akhir) for the Diploma in Software Engineering: end-to-end system documentation for SEEDS, a new student registration application.",
    tech: ["Technical Documentation", "Final Project"],
  },
];
