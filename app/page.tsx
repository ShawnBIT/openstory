import { HeroSection } from "@/components/sections/HeroSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CompetitionsSection } from "@/components/sections/CompetitionsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LifeGallerySection } from "@/components/sections/LifeGallerySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EducationSection />
      <ResearchSection />
      <ProjectsSection />
      <CompetitionsSection />
      <LifeGallerySection />
      <Footer />
    </main>
  );
}
