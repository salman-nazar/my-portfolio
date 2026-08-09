export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface Internship {
  role: string;
  organization: string;
  period: string;
  description: string;
  certificateUrl?: string;
}