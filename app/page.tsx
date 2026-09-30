import dynamic from "next/dynamic";
import SamuraiHero from "@/app/components/home/SamuraiHero";
import TrustStrip from "@/app/components/home/TrustStrip";
import NavigationPill from "@/app/components/header/NavigationPill";
import KanjiDivider from "@/app/core/components/KanjiDivider";
import ServicesSection from "@/app/components/services/ServicesSection";
import StackStrip from "@/app/components/services/StackStrip";
import SelectedWorkSection from "@/app/components/services/SelectedWorkSection";
import ProcessSection from "@/app/components/services/ProcessSection";
import ContributionsStrip from "@/app/components/services/ContributionsStrip";
import { getGitHubRepos } from "@/app/core/api/github";

const ProfessionalExperience = dynamic(() => import("@/app/components/experience/ProfessionalExperience"));
const DynamicProjectsGrid = dynamic(() => import("@/app/components/services/DynamicProjectsGrid"));
const HonorGallery = dynamic(() => import("@/app/components/experience/HonorGallery"));
const ArtSection = dynamic(() => import("@/app/components/art_gallery/ArtSection"));
const SamuraiFooter = dynamic(() => import("@/app/components/header/SamuraiFooter"));

export default async function Home() {
  const repos = await getGitHubRepos();

  return (
    <main className="relative w-full bg-background overflow-x-hidden">
      {/* ─── Full-page scanlines overlay ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-[50] opacity-[0.015] scanlines"
        aria-hidden="true"
      />

      {/* ─── Subtle neural-grid background ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] neural-grid"
        aria-hidden="true"
      />

      <NavigationPill />

      {/* 01 — Who: face, name, stack in 5 seconds */}
      <div id="home">
        <SamuraiHero />
      </div>

      {/* 02 — Trust: numbers before claims */}
      <TrustStrip />

      {/* 03 — Offer: what you can hire me for */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* 04 — Tools: the exact stack behind the offer */}
      <StackStrip />

      <KanjiDivider text="設計 • 開発 • 構築 • 計測 • 出荷" reverse={true} angle={-1.5} />

      {/* 05 — Proof A: shipped apps & backend APIs */}
      <div id="work">
        <SelectedWorkSection />
      </div>

      {/* 06 — Proof B: open-source depth */}
      <div id="projects">
        <DynamicProjectsGrid repos={repos} />
      </div>

      {/* 06b — Proof C: upstream contributions */}
      <ContributionsStrip />

      <KanjiDivider text="継続は力なり • 改善 • 実務 • 計測" angle={-1.5} />

      {/* 07 — Authority: where this happened */}
      <div id="experience">
        <ProfessionalExperience />
      </div>

      {/* 08 — Risk removal: how we will work together */}
      <ProcessSection />

      <KanjiDivider text="認定 • 実績 • 知識 • 技能" angle={-1.5} />

      {/* 09 — Credentials */}
      <div id="certificates">
        <HonorGallery />
      </div>

      <KanjiDivider text="芸術 • 創造 • 表現" reverse={true} angle={-1.5} />

      {/* 10 — Personality: memorable ending before the ask */}
      <div id="art">
        <ArtSection />
      </div>

      {/* 11 — Action: single CTA */}
      <div id="contact" className="mt-20">
        <SamuraiFooter />
      </div>
    </main>
  );
}
