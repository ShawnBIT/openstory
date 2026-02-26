import { HeroSection } from "@/components/sections/HeroSection";
import { VisitCount } from "@/components/sections/VisitCount";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CompetitionsSection } from "@/components/sections/CompetitionsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BookSection } from "@/components/sections/BookSection";
import { LifeGallerySection } from "@/components/sections/LifeGallerySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VisitCount />
      <EducationSection />
      <ExperienceSection />
      <ResearchSection />
      <ProjectsSection />
      <CompetitionsSection />
      <BookSection />
      <LifeGallerySection />
      <Footer />
    </main>
  );
}
