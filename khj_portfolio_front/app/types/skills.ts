export interface Skill {
  name: string;
  logo: string;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface SkillSection {
  title: string;
  skills: Skill[];
}
