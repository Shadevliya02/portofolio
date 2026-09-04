import type { OtherWorkItem, ProjectDetail } from "./types";

export const projects: ProjectDetail[] = [
  {
    slug: "powerbi-dashboard",
    title: "Power BI Sales & Performance Dashboard",
    summary:
      "An interactive Power BI dashboard that turns raw sales data into a decision-ready view of performance across products, regions, and time.",
    role: "Data Analyst (independent project)",
    tools: ["Power BI", "DAX", "Power Query"],
    period: "TODO: isi periode pengerjaan (mis. Jan–Feb 2025)",
    focus: "Data modeling, DAX measures, interactive dashboard, business insight",
    problem:
      "TODO: tulis pertanyaan bisnis utama yang ingin dijawab dashboard ini (contoh: produk atau wilayah mana yang paling berkontribusi terhadap penjualan, dan bagaimana tren performa dari waktu ke waktu?).",
    data: {
      source: "TODO: isi sumber data (mis. dataset penjualan internal, dataset publik, dan tautannya jika publik)",
      rowsColumns: "TODO: isi jumlah baris & kolom data",
      initialCondition:
        "TODO: jelaskan kondisi data sebelum diproses (format tabel, tabel terpisah yang perlu direlasikan, kolom yang tidak konsisten, dll.).",
    },
    process: [
      "Imported the raw data into Power BI and reviewed each table's structure and relationships.",
      "Cleaned and shaped the data with Power Query (data types, column names, removing unused fields).",
      "Built a data model by defining relationships between fact and dimension tables (star schema).",
      "Wrote DAX measures for the core metrics behind the dashboard (TODO: sebutkan nama measure DAX penting, mis. Total Sales, YoY Growth, Average Order Value).",
      "Designed report pages and visuals focused on the business question above, with filters/slicers for interactivity.",
      "Reviewed the dashboard against the original business question and refined visuals for clarity.",
    ],
    keyInsights: [
      "TODO: insight utama #1 (contoh: kategori produk X menyumbang Y% dari total penjualan meski volume transaksinya paling rendah).",
      "TODO: insight utama #2 (contoh: wilayah/cabang tertentu menunjukkan tren penurunan pada periode tertentu).",
      "TODO: insight utama #3 (contoh: pola musiman/waktu tertentu yang memengaruhi performa penjualan).",
    ],
    impact:
      "Strengthened my ability to model relational data and translate a business question into DAX measures and an interactive dashboard non-technical stakeholders can read on their own. TODO: tambahkan dampak terukur jika ada (mis. waktu pembuatan laporan yang lebih singkat, dashboard dipakai tim tertentu, dll.).",
    screenshots: [],
  },
  {
    slug: "excel-data-cleaning",
    title: "Excel Data Cleaning & Standardization",
    summary:
      "Cleaning and standardizing a messy spreadsheet with Excel Power Query — deduplication, consistent formatting, and validation rules.",
    role: "Data Analyst (independent project)",
    tools: ["Microsoft Excel", "Power Query"],
    period: "TODO: isi periode pengerjaan",
    focus: "Power Query, deduplication, format standardization, before/after",
    problem:
      "TODO: tulis masalah data yang melatarbelakangi project ini (contoh: data pelanggan/transaksi tersebar dengan format tidak konsisten sehingga sulit direkap atau dianalisis).",
    data: {
      source: "TODO: isi sumber data (mis. data internal, dataset publik + tautan jika publik)",
      rowsColumns: "TODO: isi jumlah baris & kolom sebelum dan sesudah cleaning",
      initialCondition:
        "TODO: jelaskan kondisi awal data — jenis masalah yang ditemukan (duplikat, format tanggal tidak konsisten, penulisan nama/nomor telepon berbeda-beda, sel kosong, dll.).",
    },
    process: [
      "Imported the raw spreadsheet into Excel and reviewed column types, formats, and obvious data quality issues.",
      "Used Power Query to remove duplicate records and standardize inconsistent text casing.",
      "Standardized date and phone number formats across all rows.",
      "Applied data validation rules to reduce future entry errors.",
      "Compared row counts before and after cleaning to confirm no unintended data loss.",
    ],
    keyInsights: [
      "TODO: insight utama #1 (contoh: persentase baris yang ternyata duplikat dari total data).",
      "TODO: insight utama #2 (contoh: jenis kesalahan format paling sering terjadi).",
      "TODO: insight utama #3 (contoh: dampak cleaning terhadap keakuratan rekap/laporan berikutnya).",
    ],
    impact:
      "Sharpened my eye for inconsistent, real-world data and my ability to fix it systematically and repeatably with Power Query instead of manual edits. TODO: tambahkan dampak terukur jika ada (mis. waktu yang dihemat, jumlah duplikat yang dihapus).",
    screenshots: [],
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
      note: "Illustrative example only — replace with a real before/after excerpt from your project once available. Note how the duplicate John Smith row is merged and names, phone numbers, dates, and city casing are standardized (4 rows → 3 rows).",
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
      "TODO: tulis pertanyaan yang ingin dijawab lewat EDA ini (contoh: faktor apa yang paling berkorelasi dengan [variabel target]?).",
    data: {
      source: "TODO: isi nama & sumber dataset (sertakan tautan jika dataset publik)",
      rowsColumns: "TODO: isi jumlah baris & kolom data",
      initialCondition:
        "TODO: jelaskan kondisi awal data (missing values, tipe data tidak sesuai, outlier, dll.).",
    },
    process: [
      "Loaded the dataset into a Jupyter Notebook with pandas and inspected its structure, data types, and missing values.",
      "Cleaned the dataset — handled missing values, corrected data types, and removed irrelevant columns.",
      "Computed descriptive statistics (mean, median, distribution) for the key variables.",
      "Visualized patterns and relationships with matplotlib and seaborn (histograms, boxplots, correlation heatmap).",
      "Summarized the findings into key insights for a non-technical audience.",
    ],
    keyInsights: [
      "TODO: insight utama #1.",
      "TODO: insight utama #2.",
      "TODO: insight utama #3.",
    ],
    impact:
      "Built a repeatable workflow for turning a raw dataset into statistics and visuals that support a clear narrative, using pandas, matplotlib, and seaborn. TODO: tambahkan dampak/hasil jika ada (mis. rekomendasi yang dipakai, keputusan yang terbantu).",
    screenshots: [],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((project) => project.slug === slug);
}

export const otherWork: OtherWorkItem = {
  title: "Kishenack — Snack Sales Web Application",
  period: "2025",
  description:
    "Web platform for snack sales with transaction history, sales reports, and product category management.",
  tech: ["CodeIgniter 3"],
};
