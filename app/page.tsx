import SamuraiHero from "@/app/components/home/SamuraiHero";
import NavigationPill from "@/app/components/header/NavigationPill";
import StackingExperience from "@/app/components/experience/StackingExperience";
import DynamicProjectsGrid from "@/app/components/services/DynamicProjectsGrid";
import HonorGallery from "@/app/components/experience/HonorGallery";
import ArtSection from "@/app/components/art_gallery/ArtSection";
import SamuraiFooter from "@/app/components/header/SamuraiFooter";

export default function Home() {
  return (
    <main className="relative w-full">
      <NavigationPill />
      <SamuraiHero />
      <StackingExperience />
      <DynamicProjectsGrid />
      <HonorGallery />
      <ArtSection />
      <SamuraiFooter />
    </main>
  );
}
