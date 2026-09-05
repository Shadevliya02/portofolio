import type { OtherWorkItem, ProjectDetail } from "./types";

export const projects: ProjectDetail[] = [
  {
    slug: "powerbi-dashboard",
    title: "Power BI Sales & Performance Dashboard",
    summary:
      "An interactive Power BI dashboard turning raw sales data into a decision-ready view of performance across products, regions, and time.",
    role: "Data Analyst",
    tools: ["Power BI", "DAX", "Microsoft Excel"],
    period: "2025",
    focus: "Data modeling, DAX measures, interactive dashboard, business insight",
    problem:
      "Transform the BluBlu Customer Dataset into an interactive dashboard for a Head of Marketing / Customer Growth Manager, answering three questions: what's happening with sales and the customer base today (descriptive), why certain trends and behaviors occur (diagnostic), and what to do next to drive growth (prescriptive).",
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
      "Cleaning and standardizing a messy retail transaction workbook with Excel Power Query — deduplication, format standardization, and a profit-margin pivot dashboard.",
    role: "Data Analyst (independent project)",
    tools: ["Microsoft Excel", "Power Query", "PivotTables"],
    period: "December 2025",
    focus: "Power Query, deduplication, format standardization, before/after",
    problem:
      "A 50-row retail transaction export (\"Tugas 1\") arrived as a flat, single-sheet dump with a duplicated transaction ID, blank unit prices, placeholder customer names, and inconsistent branch-name spelling/casing/whitespace — unusable for reliable reporting until it was validated, cleaned, and enriched with product cost data to calculate real profit margins.",
    data: {
      source:
        "A 50-row retail transaction export (ID_Transaksi, Tanggal, Kode_Produk, Cabang, Jumlah_Beli, Harga_Satuan, Nama_Pelanggan) plus a 5-product master lookup table (Data Master Produk) with product name, category, and unit cost.",
      rowsColumns:
        "50 raw transaction rows across 7 columns → 49 verified unique transactions after removing 1 duplicate ID; enriched to 13 columns (product name, category, unit cost, revenue, cost, profit) after integration.",
      initialCondition:
        "One transaction ID (TRX-035) assigned to two different orders, 4 blank unit prices, several branch names with typos/casing/whitespace issues (\"Banndung\", \"jakarta\", \" Bandung\", \"Jakarta  \", \"  Medan\"), placeholder \"N/A\" customer names, and one date stored as corrupted text instead of a real date.",
    },
    process: [
      "Reviewed the raw 50-row export (1. Data Transaksi) and used Excel conditional formatting rules — duplicate values on the ID column, blank-cell detection across the sheet — on a validation sheet (2. Data Validasi) to visually flag issues before touching any data.",
      "Built the cleaning pass as a Power Query pipeline: removed the one genuine duplicate transaction ID (TRX-035, recorded twice for two different customers), bringing the dataset to 49 unique rows.",
      "Standardized branch names with Trim and Capitalize Each Word (fixing stray leading/trailing spaces, inconsistent casing, and a typo — \"Banndung\" → \"Bandung\"), replaced placeholder \"N/A\" customer names with a consistent \"Tidak Diketahui\" label, filled 4 blank unit prices, and corrected one corrupted date entry — all landed on a dedicated 3. Data Cleaning sheet.",
      "Merged in product details from the 5-row Data Master Produk table via VLOOKUP, adding product name, category, and unit cost (4. Data Integration).",
      "Engineered Total_Omzet (revenue), Total_Modal (cost), and Total_Profit columns per transaction (5. Future Engineering) to move from raw counts to profit and margin.",
      "Built a 6. Dashboard Pivot sheet with PivotTables for monthly revenue, profit margin by category, and revenue by customer, plus a monthly sales-trend chart and a top-customers chart.",
      "Spot-checked the pivot output against the raw data and flagged a clear outlier — a single 1,000-unit order — for follow-up instead of folding it silently into the headline numbers.",
    ],
    keyInsights: [
      "Cleaning surfaced exactly 1 true duplicate ID (TRX-035, entered once for \"Ebit G Ade\" and again for \"Opick\") and 4 blank unit prices — small in count, but each would have silently distorted revenue totals if left unresolved.",
      "One transaction — 1,000 units of Kaos Kaki (socks) sold in a single order — generated Rp25,000,000 of the workbook's Rp51,300,000 total revenue (~49%). It's almost certainly a data-entry error (every other order in the set is 1–30 units), so I flagged it for the data owner rather than reporting it at face value.",
      "By category, Aksesoris carried the highest margin at 76.2% (Rp27.07M profit on Rp35.5M revenue), well ahead of Pakaian (43.8%) and Sepatu (35.9%) — accessories' low unit cost relative to selling price makes them disproportionately profitable even before accounting for the outlier order.",
    ],
    impact:
      "Took a 50-row export with 1 duplicate ID, 4 blanks, and half a dozen text-formatting inconsistencies down to 49 verified, standardized transactions, then joined in product cost data to turn a flat log into a profit-and-margin view a business could act on. The exercise sharpened muscle memory for the specific Excel/Power Query moves that make that possible — Trim/Capitalize Each Word, Remove Duplicates, VLOOKUP merges, conditional-formatting QA rules — and reinforced treating an outlier value (the 1,000-unit order) as a question to ask the data owner, not a number to report at face value.",
    screenshots: [
      {
        src: "/projects/excel-data-cleaning/data-validation-flags.png",
        alt: "Excerpt of the raw transaction sheet with duplicate-ID, blank-value, and formatting issues highlighted in red, yellow, and orange",
        caption: "QA pass: flagging the duplicate ID, blank prices, and formatting issues before any cell is edited.",
      },
      {
        src: "/projects/excel-data-cleaning/dashboard-pivot.png",
        alt: "Pivot dashboard showing monthly revenue trend, profit margin by product category, and top 5 customers by revenue, with the May outlier order called out",
        caption: "Dashboard Pivot: monthly revenue trend, margin by category, and top customers — with the outlier order called out.",
      },
    ],
    beforeAfter: {
      columns: ["ID_Transaksi", "Cabang", "Nama_Pelanggan", "Harga_Satuan"],
      before: [
        ["TRX-007", "Medan", "Dewi Sartika", "(blank)"],
        ["TRX-011", "Medan", "N/A", "150000"],
        ["TRX-020", "Banndung", "Putri Titian", "120000"],
        ["TRX-035", "Jakarta", "Ebit G Ade", "500000"],
        ["TRX-035", "  Medan", "Opick", "250000"],
      ],
      after: [
        ["TRX-007", "Medan", "Dewi Sartika", "150000"],
        ["TRX-011", "Medan", "Tidak Diketahui", "150000"],
        ["TRX-020", "Bandung", "Putri Titian", "120000"],
        ["TRX-035", "Medan", "Opick", "250000"],
      ],
      note: "Real excerpt from the Tugas 1 workbook — TRX-035 was entered twice under the same ID for two different customers; the duplicate row was removed, the \"Banndung\" typo was corrected, \"N/A\" was replaced with a consistent placeholder, and a blank unit price was filled (5 rows → 4 rows).",
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
