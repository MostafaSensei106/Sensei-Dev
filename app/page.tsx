import dynamic from "next/dynamic";
import HeroSection from "@/app/components/home/HeroSection";
import StatsBar from "@/app/components/home/StatsBar";
import SiteNav from "@/app/components/header/SiteNav";
import SectionDivider from "@/app/core/components/SectionDivider";
import SlashDivider from "@/app/core/components/SlashDivider";
import TickerStrip from "@/app/core/components/TickerStrip";
import SectionSkeleton from "@/app/core/components/SectionSkeleton";
import { getGitHubRepos } from "@/app/core/api/github";

/*
 * Everything below the first viewport is code-split. Hero + nav stay static so
 * the first paint is never blocked by a chunk request.
 */
const ServicesSection = dynamic(
  () => import("@/app/components/services/ServicesSection"),
  { loading: () => <SectionSkeleton lines={3} /> }
);
const WorkShowcase = dynamic(
  () => import("@/app/components/services/WorkShowcase"),
  { loading: () => <SectionSkeleton lines={3} /> }
);
const TechStackGrid = dynamic(
  () => import("@/app/components/services/TechStackGrid"),
  { loading: () => <SectionSkeleton lines={6} /> }
);
const UsesSection = dynamic(
  () => import("@/app/components/services/UsesSection"),
  { loading: () => <SectionSkeleton lines={3} /> }
);
const ProcessSection = dynamic(
  () => import("@/app/components/services/ProcessSection"),
  { loading: () => <SectionSkeleton lines={4} /> }
);
const FaqSection = dynamic(
  () => import("@/app/components/services/FaqSection"),
  { loading: () => <SectionSkeleton lines={4} /> }
);
const ContributionsGrid = dynamic(
  () => import("@/app/components/services/ContributionsGrid"),
  { loading: () => <SectionSkeleton lines={3} /> }
);
const ExperienceTimeline = dynamic(
  () => import("@/app/components/experience/ExperienceTimeline"),
  { loading: () => <SectionSkeleton lines={3} tall /> }
);
const MilestonesSection = dynamic(
  () => import("@/app/components/experience/MilestonesSection"),
  { loading: () => <SectionSkeleton lines={3} /> }
);
const NowSection = dynamic(
  () => import("@/app/components/experience/NowSection"),
  { loading: () => <SectionSkeleton lines={2} /> }
);
const ProjectsGrid = dynamic(
  () => import("@/app/components/services/ProjectsGrid"),
  { loading: () => <SectionSkeleton lines={6} tall /> }
);
const CredentialsGallery = dynamic(
  () => import("@/app/components/experience/CredentialsGallery"),
  { loading: () => <SectionSkeleton lines={3} tall /> }
);
const ArtGallery = dynamic(
  () => import("@/app/components/art-gallery/ArtGallery"),
  { loading: () => <SectionSkeleton lines={3} tall /> }
);
const ContactFooter = dynamic(
  () => import("@/app/components/header/ContactFooter"),
  { loading: () => <SectionSkeleton lines={2} tall /> }
);

export default async function Home() {
  const repos = await getGitHubRepos();
  const projectCount = repos.length;
  const starCount = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

  return (
    <main className="relative w-full bg-background text-foreground overflow-x-hidden">
      {/* ─── Full-page scanlines overlay ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-[50] opacity-[0.015] scanlines"
        aria-hidden="true"
      />

      {/* ─── Subtle grid background ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] neural-grid"
        aria-hidden="true"
      />

      <SiteNav />

      {/* 01  Who: face, name, stack in 5 seconds */}
      <HeroSection projectCount={projectCount} starCount={starCount} />

      {/* 02  Trust: numbers before claims */}
      <StatsBar />

      {/* 03  Offer: what you can hire me for */}
      <ServicesSection />

      <SlashDivider
        label="Build Log"
        japanese="設計・開発・構築"
        origin="left"
      />

      {/* 04  Proof A: shipped apps & backend APIs */}
      <WorkShowcase />

      {/* 05  Proof B: open-source depth */}
      <ProjectsGrid repos={repos} />

      {/* 05b  Proof C: upstream contributions */}
      <ContributionsGrid />

      <TickerStrip />

      {/* 06  Toolbox: the tools behind the proof above */}
      <TechStackGrid />

      {/* 06b  Daily drivers */}
      <UsesSection />

      {/* 07  Authority: where this happened */}
      <ExperienceTimeline />

      {/* 07b  Path recap + present snapshot */}
      <MilestonesSection />
      <NowSection />

      {/* 08  Risk removal: how we will work together */}
      <ProcessSection />

      {/* 08b  Pre-call answers */}
      <FaqSection />

      <SlashDivider
        label="Credentials"
        japanese="認定・実績"
        origin="right"
      />

      {/* 09  Credentials */}
      <CredentialsGallery />

      <SectionDivider text="芸術 • 創造 • 表現" reverse={true} angle={-1.5} />

      {/* 10  Personality: memorable ending before the ask */}
      <ArtGallery />

      {/* 11  Action: single CTA */}
      <div id="contact" className="mt-20">
        <ContactFooter />
      </div>
    </main>
  );
}
