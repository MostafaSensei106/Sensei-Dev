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
}

export interface ProjectsData {
  githubUsername: string;
  pinnedRepos: string[];
  highlights: ProjectHighlight[];
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
  certificates: Certificate[];
  artGallery: ArtGalleryItem[];
}
