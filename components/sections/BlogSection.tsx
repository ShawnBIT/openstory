"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Blog
        </h2>
        <p className="text-2xl font-semibold text-primary">博客</p>
        <p className="mt-4 text-secondary">
          基于 Markdown 的博客列表，支持代码高亮（Shiki）。正文在 /blog/[slug]。
        </p>
        <Link
          href="/blog"
          className="mt-4 inline-block text-sm text-accent-green hover:underline"
        >
          View all posts →
        </Link>
      </motion.div>
    </section>
  );
}
