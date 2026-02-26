"use client";

import { motion } from "framer-motion";

export function ProjectsSection() {
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
        <p className="text-2xl font-semibold text-primary">AI 辅助开发项目</p>
        <p className="mt-4 text-secondary">
          展示通过 AI 辅助开发的小型产品，突出创新和速度感。数据来自 content/data/projects.json。
        </p>
      </motion.div>
    </section>
  );
}
