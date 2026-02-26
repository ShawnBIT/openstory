import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CompetitionsSection } from "@/components/sections/CompetitionsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { LifeGallerySection } from "@/components/sections/LifeGallerySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ResearchSection />
      <ProjectsSection />
      <CompetitionsSection />
      <BlogSection />
      <LifeGallerySection />
      <Footer />
    </main>
  );
}
