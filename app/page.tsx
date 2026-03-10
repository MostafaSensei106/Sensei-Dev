import SamuraiHero from "@/app/components/home/SamuraiHero";
import NavigationPill from "@/app/components/header/NavigationPill";
import ProfessionalExperience from "@/app/components/experience/ProfessionalExperience";
import DynamicProjectsGrid from "@/app/components/services/DynamicProjectsGrid";
import HonorGallery from "@/app/components/experience/HonorGallery";
import ArtSection from "@/app/components/art_gallery/ArtSection";
import SamuraiFooter from "@/app/components/header/SamuraiFooter";
import KanjiDivider from "@/app/core/components/KanjiDivider";

export default function Home() {
  return (
    <main className="relative w-full bg-background overflow-x-hidden">
      <NavigationPill />
      <div id="home">
        <SamuraiHero />
      </div>
      
      <KanjiDivider text="武士道 • 継続は力なり • 改善 • 不撓不屈" angle={1.5} />
      
      <div id="experience">
        <ProfessionalExperience />
      </div>

      <KanjiDivider text="設計 • 開発 • 構築 • 実装 • 実験" reverse={true} angle={-1.5} />

      <div id="projects">
        <DynamicProjectsGrid />
      </div>

      <KanjiDivider text="認定 • 成就 • 学問 • 知識 • 技能" angle={2} />

      <div id="certificates">
        <HonorGallery />
      </div>

      <KanjiDivider text="芸術 • 創造 • 精神 • 表現 • 魂" reverse={true} angle={-2} />

      <div id="art">
        <ArtSection />
      </div>

      <div id="contact" className="mt-20">
        <SamuraiFooter />
      </div>
    </main>
  );
}
