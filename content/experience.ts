import type { ExperienceItem } from "./types";

const photo = (n: 1 | 2 | 3 | 4 | 5, alt: string) => ({
  src: `/placeholders/experience-photo-${n}.png`,
  alt,
});

export const experience: ExperienceItem[] = [
  {
    role: "Technical Writer Intern",
    organization: "Direktorat PuTI, Telkom University",
    location: "Bandung",
    period: "Jul 2025 – Jul 2026",
    bullets: [
      "Gathered and validated requirements by coordinating with stakeholders across multiple units, reducing ambiguity before development began.",
      "Documented end-to-end development processes into structured reports, giving teams one reliable reference instead of scattered notes.",
      "Translated business process analysis into standardized documentation, letting the development team build from a shared source of truth.",
    ],
    photos: [1, 2, 3, 4, 5].map((n) =>
      photo(n as 1 | 2 | 3 | 4 | 5, "TODO: replace with a real photo from the Technical Writer Intern role"),
    ),
  },
  {
    role: "Mobile Programming Practicum Assistant",
    organization: "Telkom University",
    location: "Bandung",
    period: "Nov 2025 – Jan 2026",
    bullets: [
      "Diagnosed student code issues during debugging sessions, tracing root causes instead of just patching symptoms.",
      "Walked students through fixes step by step, so they understood the reasoning and could apply it next time.",
      "Explained core concepts — UI components, data handling, event-driven programming — connecting theory to working code.",
    ],
    photos: [2, 3, 4, 5, 1].map((n) =>
      photo(n as 1 | 2 | 3 | 4 | 5, "TODO: replace with a real photo from the Mobile Programming Practicum Assistant role"),
    ),
  },
  {
    role: "Interface Design Practicum Assistant",
    organization: "Telkom University",
    location: "Bandung",
    period: "2024 – 2025",
    bullets: [
      "Managed scheduling, materials, and records for 2 classes of 50+ students, keeping sessions running with no administrative delays.",
      "Resolved most module-related questions directly as first-line support, cutting wait time for students.",
      "Escalated unresolved cases to lecturers with clear context, routing issues to the right person the first time.",
    ],
    photos: [3, 4, 5, 1, 2].map((n) =>
      photo(n as 1 | 2 | 3 | 4 | 5, "TODO: replace with a real photo from the Interface Design Practicum Assistant role"),
    ),
  },
  {
    role: "Liaison Officer Coordinator",
    organization: "SRE Essay",
    location: "Bandung",
    period: "Oct – Nov 2025",
    bullets: [
      "Coordinated a team of Liaison Officers, assigning tasks and tracking progress against event timelines.",
      "Monitored progress in real time, catching delays early enough to adjust before they affected the event.",
      "Managed communication between participants, officers, and the organizing committee, keeping all three in sync.",
    ],
    photos: [4, 5, 1, 2, 3].map((n) =>
      photo(n as 1 | 2 | 3 | 4 | 5, "TODO: replace with a real photo from the Liaison Officer Coordinator role"),
    ),
  },
  {
    role: "Student Mentor",
    organization: "Badan Mentoring",
    location: "Bandung",
    period: "Oct 2025 – Jun 2026",
    bullets: [
      "Facilitated mentoring sessions on a consistent schedule, giving mentees a reliable space to raise questions.",
      "Tailored learning support to each session's topic instead of generic, one-size-fits-all guidance.",
      "Supported students through the full mentoring period, helping them stay on track with coursework.",
    ],
    photos: [5, 1, 2, 3, 4].map((n) =>
      photo(n as 1 | 2 | 3 | 4 | 5, "TODO: replace with a real photo from the Student Mentor role"),
    ),
  },
  {
    role: "Admin Online Shop",
    organization: "Genshin Impact Account Marketplace (co-owned with partner)",
    location: "Indonesia",
    period: "2021 – 2023",
    bullets: [
      "Co-ran a gaming-account marketplace business with a partner across 2 Instagram storefronts and 2 Twitter/X storefronts, plus a listing on ZeusX, an international marketplace, expanding sales beyond the local market.",
      "Built and led a 4-person support team (1 editor and 1 middleman/rekber handler per platform pair), keeping post quality and transaction turnaround consistent across all 4 accounts.",
      "Tracked daily sales, expenses, and profit in BukuWarung, reconciling local Instagram/Twitter revenue against ZeusX's international wallet balance and withdrawals to keep the books accurate.",
      "Ran ongoing market analysis — competitor pricing, testimonial/review volume, follower growth — to guide restocking and pricing decisions and sustain the business's growth.",
      "Acted as the trusted middleman (rekber) on high-value transactions, resolving buyer/seller disputes and safeguarding both sides of each trade to protect the shops' reputation.",
    ],
    photos: [1, 3, 5, 2, 4].map((n) =>
      photo(n as 1 | 2 | 3 | 4 | 5, "TODO: replace with a real photo from the Admin Online Shop work"),
    ),
  },
];
