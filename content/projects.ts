import type { ProjectItem } from "./types";

export const projects: ProjectItem[] = [
  {
    slug: "powerbi-dashboard",
    title: "Power BI Sales & Performance Dashboard",
    role: "Data Analyst",
    period: "2025",
    bullets: [
      "Cleaned and modeled the BluBlu Customer Dataset (800 → 750 unique rows, 30+ columns) in Excel, then built a Power BI dashboard around a dedicated DAX measures table.",
      "Total Net Sales reached €250.09K across 750 customers, with Jewelry & Accessories the top category and Baby Products a high-rating \"hidden gem\" that's under-promoted relative to its quality.",
      "Turned the findings into 3 concrete recommendations for a Head of Marketing persona — a flash-sale campaign, a product spotlight, and a loyalty-signup push.",
    ],
    tools: ["Power BI", "DAX", "Microsoft Excel"],
    photos: [
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
    role: "Data Analyst (independent project)",
    period: "December 2025",
    bullets: [
      "Cleaned a 50-row retail transaction export with Power Query — removed 1 duplicate ID, filled 4 blank prices, and standardized branch names, casing, and dates.",
      "Joined in product cost data via VLOOKUP and built a PivotTable dashboard covering monthly revenue, profit margin by category, and top customers.",
      "Flagged a 1,000-unit outlier order (~49% of total revenue) for the data owner instead of reporting it at face value — Aksesoris came out as the highest-margin category at 76.2%.",
    ],
    tools: ["Microsoft Excel", "Power Query", "PivotTables"],
    photos: [
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
  },
  {
    slug: "python-eda",
    title: "Python Exploratory Data Analysis",
    role: "Data Analyst (independent project)",
    period: "TODO: isi periode pengerjaan",
    bullets: [
      "Ran a full pandas/seaborn EDA on the UCI Red Wine Quality dataset (1,599 samples, 11 physicochemical features) — descriptive stats, a correlation heatmap, and per-feature distributions.",
      "Alcohol content came out as the strongest driver of quality (r = 0.48, top Random Forest feature), ahead of sulphates and volatile acidity.",
      "A baseline Random Forest hit 66% accuracy; GridSearchCV tuning barely moved it (65.9%) — a hands-on lesson that class imbalance, not the model, was the real ceiling.",
    ],
    tools: ["Python", "pandas", "NumPy", "matplotlib", "seaborn", "scikit-learn", "Jupyter Notebook"],
    photos: [
      {
        src: "/projects/python-eda/quality-distribution.png",
        alt: "Bar chart showing the distribution of red wine quality scores, heavily concentrated at 5 and 6",
        caption: "Quality distribution: scores 5 and 6 make up 82% of the 1,599 samples.",
      },
      {
        src: "/projects/python-eda/correlation-heatmap.png",
        alt: "Correlation heatmap across all 11 physicochemical features and the quality target",
        caption: "Correlation matrix: alcohol and sulphates correlate positively with quality; volatile acidity negatively.",
      },
      {
        src: "/projects/python-eda/feature-importance.png",
        alt: "Horizontal bar chart of Random Forest feature importances, led by alcohol and sulphates",
        caption: "Random Forest feature importance: alcohol is the top predictor of quality.",
      },
      {
        src: "/projects/python-eda/confusion-matrix.png",
        alt: "Confusion matrix of the Random Forest classifier showing strong confusion between adjacent quality classes",
        caption: "Confusion matrix: errors concentrate between adjacent classes (5↔6, 6↔7); the rare classes (3, 4, 8) are barely predicted.",
      },
    ],
  },
  {
    slug: "paylater-sentiment-analysis",
    title: "Multi-Platform Sentiment Analysis of PayLater Services",
    role: "Research Author — 1st author, Faculty of Applied Science, Telkom University",
    period: "Aug 2025 – Jan 2026 · published at ISIBER 2026",
    bullets: [
      "Scraped and cleaned 34,652 posts/comments across X, YouTube, and TikTok (32,631 valid after filtering), building a custom Indonesian slang-normalization pipeline.",
      "Fine-tuned an IndoRoBERTa classifier to 0.857 average accuracy across platforms, beating SVM/Random Forest baselines by up to +13.1% on YouTube.",
      "Applied BERTopic to the negative-sentiment cluster and found impulsive-buying regret (25.5%) outranks debt-collection complaints — published at the 2026 International Seminar on Intelligent Business and Edge-Computing Research.",
    ],
    tools: ["Python", "IndoRoBERTa (Transformers)", "BERTopic", "Sastrawi", "NLTK", "pandas", "scikit-learn"],
    photos: [
      {
        src: "/projects/paylater-sentiment-analysis/model-accuracy-by-platform.png",
        alt: "Grouped bar chart comparing SVM, Random Forest, and IndoRoBERTa accuracy across X, YouTube, and TikTok",
        caption: "IndoRoBERTa beats both baselines on every platform, most notably on YouTube (+13.1%).",
      },
      {
        src: "/projects/paylater-sentiment-analysis/negative-sentiment-topics.png",
        alt: "Horizontal bar chart of the dominant BERTopic themes within the negative-sentiment cluster",
        caption: "BERTopic on the negative cluster: impulsive buying regret and usury (riba) distress outrank debt-collection complaints.",
      },
      {
        src: "/projects/paylater-sentiment-analysis/dataset-collection-funnel.png",
        alt: "Grouped bar chart of raw vs. valid data collected from X, YouTube, and TikTok",
        caption: "34,652 raw posts/comments filtered down to 32,631 valid records across the three platforms.",
      },
    ],
  },
  {
    slug: "kishesnack",
    title: "KisheSnack — Bakery & Cake E-Commerce Platform",
    role: "Full-Stack Developer & Co-Author",
    period: "2025",
    bullets: [
      "Built a full CodeIgniter 3 storefront for a real bakery business — product catalog, flavors/stock/wishlist/live chat, cart and checkout, order tracking, and an admin panel — end to end with the Agile methodology.",
      "Co-authored a published paper on the project, \"The Recipe for Digital Growth: Optimizing KisheSnack's Web Presence for Market Expansion\" (Journal of Information System & Artificial Intelligence).",
      "Validated the build with a 10-respondent user satisfaction survey, scoring consistently 4.0–5.0/5 across UI, UX, and functionality.",
    ],
    tools: ["CodeIgniter 3", "Agile Methodology", "UI/UX Testing"],
    photos: [
      {
        src: "/projects/kishesnack/storefront.png",
        alt: "TODO: replace with a real screenshot of the KisheSnack storefront and category catalog",
        caption: "Storefront & catalog",
      },
      {
        src: "/projects/kishesnack/product-page.png",
        alt: "TODO: replace with a real screenshot of a KisheSnack product page",
        caption: "Product page",
      },
      {
        src: "/projects/kishesnack/cart-checkout.png",
        alt: "TODO: replace with a real screenshot of the KisheSnack cart and checkout flow",
        caption: "Cart & checkout",
      },
    ],
  },
  {
    slug: "system-documentation",
    title: "System Documentation — SEEDS, iGracias, Disertasi & TA Pascasarjana",
    role: "Technical Writer Intern, Direktorat PuTI",
    period: "Jul 2025 – Present",
    bullets: [
      "Produced end-to-end documentation — User Manuals, UAT / Rangkaian Uji Penerimaan Pengguna reports, meeting notulensi, and flow/use-case diagrams — across 4 Telkom University applications (SEEDS v3.7, iGracias, Disertasi, TA Pascasarjana).",
      "Coordinated requirements gathering and sign-off across internal, external, faculty, and Telkom branch stakeholders, tracking progress in Notion.",
      "Kept documentation aligned to what each stakeholder group actually needed, instead of one generic report for everyone.",
    ],
    tools: ["User Manual", "UAT", "Notulensi", "Notion", "Diagrams"],
    photos: [
      {
        src: "/projects/system-documentation/user-manual.png",
        alt: "TODO: replace with a real screenshot or photo of a User Manual page",
        caption: "User Manual",
      },
      {
        src: "/projects/system-documentation/uat-report.png",
        alt: "TODO: replace with a real screenshot of a UAT report",
        caption: "UAT report",
      },
      {
        src: "/projects/system-documentation/flow-diagram.png",
        alt: "TODO: replace with a real flow/use-case diagram",
        caption: "Flow / use-case diagram",
      },
    ],
  },
];
