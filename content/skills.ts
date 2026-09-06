import type { SkillsContent } from "./types";

export const skills: SkillsContent = {
  groups: [
    {
      id: "data-analytics",
      title: "Data & Analytics",
      items: [
        "Microsoft Excel (Power Query, PivotTable, XLOOKUP/VLOOKUP, conditional formatting)",
        "Power BI (data modeling, DAX, interactive dashboard)",
        "Python (pandas, NumPy, matplotlib/seaborn, scikit-learn)",
        "Data cleaning & validation",
        "Exploratory Data Analysis",
        "NLP & sentiment analysis (Transformers/IndoRoBERTa, BERTopic)",
      ],
    },
    {
      id: "reporting-documentation",
      title: "Reporting & Documentation",
      items: [
        "Technical documentation",
        "Business process documentation",
        "Requirement gathering",
        "Report writing & preparation",
        "Data administration",
      ],
    },
    {
      id: "office-it-support",
      title: "Office & IT Support",
      items: [
        "Microsoft Word, Excel, PowerPoint",
        "Google Workspace",
        "Basic troubleshooting & user guidance",
        "Git/GitHub",
      ],
    },
    {
      id: "working-style",
      title: "Working Style",
      items: [
        "Attention to detail",
        "Problem-solving",
        "Clear communication",
        "Teamwork",
        "Time management",
      ],
    },
  ],
  additional: "HTML, CSS, JavaScript, PHP (Laravel, CodeIgniter), RESTful API, Figma",
};
