import { PORTFOLIO_DATA } from "./config/portfolio";

export const GITHUB_USERNAME = PORTFOLIO_DATA.projects.githubUsername;

export const knowledgeEducationItems = PORTFOLIO_DATA.experience.map((exp) => ({
  tag: exp.role,
  subTag: exp.company,
  subTagHyperlink: exp.company === "Lothga" ? "https://lothgha.com/" : "https://www.bu.edu.eg/",
  desc: exp.description,
  isRight: !exp.isEducation,
  startDate: exp.period.split(" – ")[0],
  endDate: exp.period.split(" – ")[1],
  showDate: true,
}));

export const images = PORTFOLIO_DATA.artGallery.map((item) => ({
  src: item.src,
  thumb: item.thumb,
}));

export const honorsAndCertificates = PORTFOLIO_DATA.certificates.map((cert) => ({
  title: cert.title,
  issuer: cert.issuer,
  date: cert.date,
  icon: "award",
}));
