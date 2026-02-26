"use client";

import { motion } from "framer-motion";
import { FileText, Code2 } from "lucide-react";
import { papers } from "@/content/data/papers";
import { DateBadge } from "@/components/ui/DateBadge";

/** 共同一作：前 coFirst 位作者名后加 † */
function applyCoFirst(authors: string, coFirst: number): string {
  const list = authors.split(",").map((s) => s.trim());
  return list
    .map((name, i) => (i < coFirst ? `${name}†` : name))
    .join(", ");
}

/** 高亮本人：高亮第一个 "S Wang"（即 WangShen），其余同名人不高亮 */
function highlightAuthor(authors: string) {
  const parts = authors.split(/(S Wang)/gi);
  let sWangCount = 0;
  return parts.map((part, i) => {
    if (/^S Wang$/i.test(part)) {
      sWangCount += 1;
      const highlight = sWangCount === 1;
      return (
        <span
          key={i}
          className={highlight ? "font-medium text-accent-green" : undefined}
        >
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

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
        <p className="text-2xl font-semibold text-primary">论文</p>
        <p className="mt-1 text-sm text-muted">来源 Google Scholar</p>
        <ul className="mt-8 space-y-4">
          {papers.map((paper, i) => (
            <PaperItem key={`${paper.title}-${paper.year}`} paper={paper} index={i} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function PaperItem({
  paper,
  index,
}: {
  paper: (typeof papers)[0];
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-border bg-elevated/50 px-4 py-3 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-sm font-medium leading-snug text-primary pr-2">
            {paper.title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            {paper.pdf && (
              <a
                href={paper.pdf}
                target="_blank"
                rel="noopener noreferrer"
                title="PDF"
                className="rounded p-1.5 text-muted transition-colors hover:bg-surface hover:text-accent-green"
              >
                <FileText className="h-4 w-4" />
              </a>
            )}
            {paper.code && (
              <a
                href={paper.code}
                target="_blank"
                rel="noopener noreferrer"
                title="Code"
                className="rounded p-1.5 text-muted transition-colors hover:bg-surface hover:text-accent-green"
              >
                <Code2 className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        {paper.authors && (
          <p className="text-xs leading-relaxed text-secondary">
            {highlightAuthor(
              paper.coFirstCount
                ? applyCoFirst(paper.authors, paper.coFirstCount)
                : paper.authors
            )}
            {paper.coFirstCount != null && (
              <span className="ml-1.5 text-muted">† 共同一作</span>
            )}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded border border-border-accent bg-surface px-2 py-0.5 font-mono">
            {paper.venue}
          </span>
          <DateBadge className="px-2 py-0.5 text-xs">{paper.year}</DateBadge>
        </div>
      </div>
    </motion.li>
  );
}
