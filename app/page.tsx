import { HeroSection } from "@/components/sections/HeroSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
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
      <ExperienceSection />
      <ResearchSection />
      <ProjectsSection />
      <CompetitionsSection />
      <LifeGallerySection />
      <Footer />
    </main>
  );
}
