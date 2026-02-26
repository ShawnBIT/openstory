"use client";

import { motion } from "framer-motion";

export function LifeGallerySection() {
  return (
    <section id="life" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Life / Gallery
        </h2>
        <p className="text-2xl font-semibold text-primary">生活与相册</p>
        <p className="mt-4 text-secondary">
          简约的照片墙或生活片段记录。
        </p>
      </motion.div>
    </section>
  );
}
