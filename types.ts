
export interface Project {
  title: string;
  description: string;
  features: string[];
  tools: string[];
  github?: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Language' | 'Frontend' | 'Backend' | 'Tool' | 'Fundamental';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}