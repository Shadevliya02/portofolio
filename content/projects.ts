import type { OtherWorkItem, ProjectDetail } from "./types";

export const projects: ProjectDetail[] = [
  {
    slug: "powerbi-dashboard",
    title: "Power BI Sales & Performance Dashboard",
    summary:
      "An interactive Power BI dashboard turning raw sales data into a decision-ready view of performance across products, regions, and time.",
    role: "Data Analyst — BNSP Data Analyst Certification (Dashboard Challenge)",
    tools: ["Power BI", "DAX", "Microsoft Excel"],
    period: "2025",
    focus: "Data modeling, DAX measures, interactive dashboard, business insight",
    problem:
      "As a BNSP Data Analyst certification 'Dashboard Challenge,' the brief was to turn the BluBlu Customer Dataset into an interactive dashboard for a Head of Marketing / Customer Growth Manager, answering three questions: what's happening with sales and the customer base today (descriptive), why certain trends and behaviors occur (diagnostic), and what to do next to drive growth (prescriptive).",
    data: {
      source:
        "BluBlu_Customer_Dataset.csv, enriched with a category.csv lookup file (via VLOOKUP) to group purchases into broader product sections.",
      rowsColumns:
        "800 raw rows → 750 unique customer rows after de-duplication, across 30+ columns.",
      initialCondition:
        "50 duplicate Customer_ID rows, missing values in Social_Media_Influence and Engagement_with_Ads, inconsistent capitalization/spacing and typos in categorical fields, currency and percentage fields stored as text, and no product-section grouping for category-level analysis.",
    },
    process: [
      "Removed 50 duplicate rows by Customer_ID in Excel, leaving 750 unique customer records for analysis.",
      "Filled missing values in Social_Media_Influence and Engagement_with_Ads with each column's mode (most frequent value).",
      "Standardized categorical text with PROPER(TRIM) (Gender, Payment_Method, Purchase_Channel, Marital_Status) and corrected typos in Purchase_Category via Find/Replace.",
      "Fixed data types — Purchase_Amount to Number, Discount (%) to a decimal, numeric columns to whole/1-decimal numbers, and Time_of_Purchase standardized to YYYY-MM-DD.",
      "Enriched the dataset with a new Section column (e.g., Consumer Goods, Living Essentials) via VLOOKUP, and added calculated columns Net_Sales (USD) and Discount_Amount (USD).",
      "Imported the cleaned data into Power BI, verified data types across all 30+ columns, and set Location's data category to City so the map visual would resolve correctly.",
      "Built a dedicated Key Measures table in DAX, including Total Customers (DISTINCTCOUNT), Avg. Satisfaction (AVERAGE), Total Net Sales (EUR) = SUM(Net_Sales (USD)) * 0.9, and a weighted Avg. Loyalty Score (70% Brand_Loyalty + 30% loyalty-program membership).",
      "Designed dashboard visuals — KPI cards, monthly sales trend, category ranking, customer map, gender split, satisfaction gauge, and social media influence — around the three business questions.",
    ],
    keyInsights: [
      "Total Net Sales reached €250.09K across 750 unique customers, with an average satisfaction of 5.4/10 and 49.5% of customers enrolled in the loyalty program.",
      "Jewelry & Accessories drove the most Net Sales ($46,903), followed by Hotels ($33,786) and Luxury Goods ($26,199); Clothing was the lowest ($5,406).",
      "Baby Products had the highest average product rating of any category despite not ranking in the top 3 for sales — a 'hidden gem' that's under-promoted relative to its quality.",
      "469 customers in the Consumer Goods section (Jewelry, Electronics, etc.) made repeat purchases, showing that high-value categories are effective at driving repeat business.",
      "Customers are spread globally across Europe, the Americas, and Asia rather than concentrated in one market — strong reach, but a challenge for region-specific logistics and marketing.",
      "Monthly sales are volatile, peaking in March and bottoming out in October.",
    ],
    impact:
      "Turned the dashboard's insights into three concrete recommendations for a Head of Marketing persona: run a Jewelry & Accessories flash-sale campaign to offset the October sales dip, launch a 'Customer Spotlight' campaign for Baby Products to convert its high rating into sales, and target the ~50% of repeat Consumer Goods buyers who aren't loyalty members with a one-time signup incentive. Working through this certification challenge sharpened my ability to go beyond descriptive reporting — cleaning and modeling a 30+ column dataset, writing weighted DAX measures against a specific brief, and turning the results into diagnostic and prescriptive insight a marketing stakeholder can act on.",
    screenshots: [
      {
        src: "/projects/powerbi-dashboard/dashboard-overview.png",
        alt: "Power BI dashboard overview: KPI cards for Net Sales, customers, satisfaction, and loyalty, monthly sales trend, and Net Sales by category",
        caption: "Overview: KPI cards, monthly Net Sales trend, and Net Sales by category.",
      },
      {
        src: "/projects/powerbi-dashboard/customer-profile.png",
        alt: "Power BI customer profile view: global customer distribution map, gender breakdown, average satisfaction gauge, and social media influence chart",
        caption: "Customer profile: geographic distribution, gender split, satisfaction, and social media influence.",
      },
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
