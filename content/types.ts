// Typed content schema. Components read from `content/*.ts` — edit data there,
// not here, unless the shape of the content itself needs to change.

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honor: string;
  gpa: string;
  eprt: string;
}

export interface Profile {
  name: string;
  roleLine: string;
  subline: string;
  location: string;
  openTo: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  /** Path under /public, e.g. "/profile-photo.jpg". Leave empty to use the typographic hero layout. */
  photoUrl: string;
  cvUrl: string;
  education: Education;
  about: string[];
  contactClosing: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface SkillsContent {
  groups: SkillGroup[];
  additional: string;
}

export type ProjectSlug =
  | "powerbi-dashboard"
  | "excel-data-cleaning"
  | "python-eda";

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface BeforeAfterExample {
  columns: string[];
  before: string[][];
  after: string[][];
  note: string;
}

export interface ProjectDataInfo {
  source: string;
  rowsColumns: string;
  initialCondition: string;
}

export interface ProjectDetail {
  slug: ProjectSlug;
  title: string;
  summary: string;
  role: string;
  tools: string[];
  period: string;
  repoUrl?: string;
  focus: string;
  problem: string;
  data: ProjectDataInfo;
  process: string[];
  keyInsights: string[];
  impact: string;
  screenshots: Screenshot[];
  beforeAfter?: BeforeAfterExample;
}

export interface OtherWorkItem {
  title: string;
  period: string;
  description: string;
  tech: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  period: string;
  highlight?: boolean;
}
