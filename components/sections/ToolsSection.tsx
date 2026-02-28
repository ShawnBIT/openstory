"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, ExternalLink } from "lucide-react";
import { useLocale } from "@/components/providers/LanguageProvider";
import type { ToolEntry } from "@/content/data/tools";

export function ToolsSection() {
  const { content, lang } = useLocale();
  const { tools, sectionTitles, labels } = content;
  return (
    <section id="tools" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Tools
        </h2>
        <p className="text-2xl font-semibold text-primary">{sectionTitles.tools}</p>
        {sectionTitles.toolsSub && (
          <p className="mt-1 text-sm text-muted">{sectionTitles.toolsSub}</p>
        )}
        {tools.length === 0 ? (
          <p className="mt-6 text-sm text-muted">{labels.toolsEmpty}</p>
        ) : (
          <ul className="mt-8 space-y-3">
            {tools.map((tool, i) => (
              <ToolItem key={`${tool.name}-${tool.href}`} tool={tool} index={i} lang={lang} />
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
}

function ToolItem({
  tool,
  index,
  lang,
}: {
  tool: ToolEntry;
  index: number;
  lang: "zh" | "en";
}) {
  const name = lang === "en" && tool.nameEn ? tool.nameEn : tool.name;
  const headline = lang === "en" && tool.headlineEn ? tool.headlineEn : tool.headline;
  const description = lang === "en" && tool.descriptionEn ? tool.descriptionEn : tool.description;
  const tag = lang === "en" && tool.tagEn ? tool.tagEn : tool.tag;
  const highlight = lang === "en" && tool.descriptionHighlightEn ? tool.descriptionHighlightEn : tool.descriptionHighlight;

  const descriptionNode = highlight ? (() => {
    const parts = description.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`));
    return (
      <>
        {parts.map((part, j) =>
          part === highlight ? (
            <span key={j} className="font-medium text-accent-green">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  })() : description;

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <a
        href={tool.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-4 rounded-lg border border-border bg-elevated/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:border-accent-green hover:bg-elevated hover:ring-2 hover:ring-accent-green/20 cursor-pointer"
      >
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface text-muted transition-colors duration-200 group-hover:border-accent-green/50">
          {tool.logo ? (
            <Image
              src={tool.logo}
              alt=""
              fill
              className="object-contain p-1"
              sizes="48px"
            />
          ) : (
            <Wrench className="h-5 w-5" />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-primary transition-colors duration-200 group-hover:text-accent-green">
              {name}
            </span>
            {tag && (
              <span className="rounded border border-border-accent bg-surface px-2 py-0.5 text-xs font-mono text-muted">
                {tag}
              </span>
            )}
            <ExternalLink className="h-3.5 w-3.5 text-muted transition-all duration-200 group-hover:text-accent-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          {headline && (
            <p className="mt-0.5 text-sm font-medium leading-snug text-primary">
              {headline}
            </p>
          )}
          <p className="mt-1 text-sm leading-relaxed text-secondary">
            {descriptionNode}
          </p>
        </div>
      </a>
    </motion.li>
  );
}
