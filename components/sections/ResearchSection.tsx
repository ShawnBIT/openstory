"use client";

import { motion } from "framer-motion";

export function ResearchSection() {
  return (
    <section id="research" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Research / Papers
        </h2>
        <p className="text-2xl font-semibold text-primary">论文展示</p>
        <p className="mt-4 text-secondary">
          此处将展示论文列表（标题、会议、摘要折叠、PDF/Code 链接）。数据来自 content/data/papers.json。
        </p>
      </motion.div>
    </section>
  );
}
