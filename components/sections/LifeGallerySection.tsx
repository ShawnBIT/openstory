"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LanguageProvider";
import { DateBadge } from "@/components/ui/DateBadge";
import type { LifeEntry } from "@/content/data/life";

export function LifeGallerySection() {
  const { content } = useLocale();
  const { life, sectionTitles } = content;
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
        <p className="text-2xl font-semibold text-primary">{sectionTitles.life}</p>
        <ul className="mt-8 space-y-12">
          {life.map((entry, i) => (
            <LifeEntryCard key={entry.id} entry={entry} index={i} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function LifeEntryCard({
  entry,
  index,
}: {
  entry: LifeEntry;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="rounded-lg border border-border bg-elevated/50 p-5 backdrop-blur-sm md:p-6"
    >
      <div className="mb-4 flex flex-wrap items-baseline gap-3">
        <DateBadge>{entry.date}</DateBadge>
        <h3 className="text-lg font-semibold text-primary">{entry.title}</h3>
      </div>
      {entry.quote && (
        <p className="mb-6 whitespace-pre-line font-serif text-sm italic leading-relaxed text-secondary">
          {entry.quote}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3">
        {entry.images.map((src, j) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 * j }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 224px"
            />
          </motion.div>
        ))}
      </div>
    </motion.li>
  );
}
