"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LanguageProvider";

export function ProjectsSection() {
  const { content } = useLocale();
  const { sectionTitles } = content;
  return (
    <section id="projects" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Projects (Vibe Coding)
        </h2>
        <p className="text-2xl font-semibold text-primary">{sectionTitles.projects}</p>
        <p className="mt-4 text-secondary">
          {sectionTitles.projectsSub}
        </p>
      </motion.div>
    </section>
  );
}
