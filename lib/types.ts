export type ResumeProfile = {
  name: string;
  title: string;
  summary: string;
  skills: string[];
  experience: { role: string; org: string; period: string; highlights: string[] }[];
  projects: { name: string; description: string; stack: string[]; link?: string }[];
  certifications: string[];
  achievements: string[];
  recommendations: string[];
};
