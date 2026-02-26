"use client";

import { motion } from "framer-motion";

export function CompetitionsSection() {
  return (
    <section id="competitions" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Competitions
        </h2>
        <p className="text-2xl font-semibold text-primary">比赛经历</p>
        <p className="mt-4 text-secondary">
          卡片形式展示，突出排名（如 Top 1%, Gold Medal）。数据来自 content/data/competitions.json。
        </p>
      </motion.div>
    </section>
  );
}
