import SamuraiHero from "@/app/components/home/SamuraiHero";
import NavigationPill from "@/app/components/header/NavigationPill";
import ProfessionalExperience from "@/app/components/experience/ProfessionalExperience";
import DynamicProjectsGrid from "@/app/components/services/DynamicProjectsGrid";
import HonorGallery from "@/app/components/experience/HonorGallery";
import ArtSection from "@/app/components/art_gallery/ArtSection";
import SamuraiFooter from "@/app/components/header/SamuraiFooter";

export default function Home() {
  return (
    <main className="relative w-full bg-background">
      <NavigationPill />
      <div id="home">
        <SamuraiHero />
      </div>
      <div id="experience">
        <ProfessionalExperience />
      </div>
      <div id="projects">
        <DynamicProjectsGrid />
      </div>
      <div id="certificates">
        <HonorGallery />
      </div>
      <div id="art">
        <ArtSection />
      </div>
      <div id="contact">
        <SamuraiFooter />
      </div>
    </main>
  );
}
