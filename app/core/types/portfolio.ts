export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  whatsapp: string;
  facebook: string;
  x: string;
}

export interface HeroInfo {
  tagline: string;
  japaneseTagline: string;
  description: string;
  photo: string;
  cvUrl: string;
}

export interface Profile {
  name: string;
  title: string;
  japaneseTitle: string;
  contact: ContactInfo;
  hero: HeroInfo;
}

export interface Experience {
  company: string;
  link: string;
  role: string;
  japaneseRole?: string;
  location: string;
  period: string;
  description: string;
  details: string[];
  isEducation?: boolean;
}

export interface ProjectHighlight {
  name: string;
  type: string;
  description: string;
  metrics: string[];
  link: string;
  githubRepo?: string;
  proofUrl?: string;
}

export interface ProjectsData {
  githubUsername: string;
  pinnedRepos: string[];
  highlights: ProjectHighlight[];
}

export type WorkType = "app" | "backend" | "library" | "tool";

export interface WorkLink {
  github?: string;
  live?: string;
  playStore?: string;
  appStore?: string;
  docs?: string;
  caseStudy?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  type: WorkType;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  platform: string;
  status: "live" | "private-demo" | "open-source";
  year: string;
  links: WorkLink;
  metrics: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  japanese: string;
  description: string;
  stack: string[];
  deliverable: string;
}

export interface StackGroup {
  id: string;
  title: string;
  japanese: string;
  items: string[];
}

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  japanese: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface ArtGalleryItem {
  src: string;
  thumb: string;
  title: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    tertiary: string;
    quaternary: string;
    background: string;
    surface: string;
    text: string;
  };
  borderRadius: {
    base: string;
    card: string;
    button: string;
  };
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  projects: ProjectsData;
  work: WorkItem[];
  services: ServiceItem[];
  stack: StackGroup[];
  process: ProcessStep[];
  certificates: Certificate[];
  artGallery: ArtGalleryItem[];
}
