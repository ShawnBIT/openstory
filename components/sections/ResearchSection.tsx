"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/LanguageProvider";
import { DateBadge } from "@/components/ui/DateBadge";
import type { Paper } from "@/content/data/papers";

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
  const { content, lang } = useLocale();
  const { papers, sectionTitles, labels } = content;
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
        <p className="text-2xl font-semibold text-primary">{sectionTitles.research}</p>
        <p className="mt-1 text-sm text-muted">{sectionTitles.researchSub}</p>
        <p className="mt-2 text-sm text-secondary">
          {lang === "zh" ? (
            <>
              论文总数：
              <span className="font-mono font-semibold text-accent-green">
                {papers.length}
              </span>
              {" 篇"}
            </>
          ) : (
            <>
              Total:{" "}
              <span className="font-mono font-semibold text-accent-green">
                {papers.length}
              </span>{" "}
              papers
            </>
          )}
        </p>
        <ul className="mt-6 space-y-4">
          {papers.map((paper, i) => (
            <PaperItem
              key={`${paper.title}-${paper.year}`}
              paper={paper}
              index={i}
              coFirstLabel={labels.coFirst}
              lang={lang}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function PaperItem({
  paper,
  index,
  coFirstLabel,
  lang,
}: {
  paper: Paper;
  index: number;
  coFirstLabel: string;
  lang: "zh" | "en";
}) {
  const primaryHref = paper.pdf ?? paper.scholar ?? paper.code;
  const secondaryCodeHref = paper.pdf && paper.code ? paper.code : undefined;
  const openLabel =
    lang === "zh"
      ? `打开论文：${paper.title}`
      : `Open paper: ${paper.title}`;

  const body = (
    <>
      <div className="flex flex-wrap items-start gap-2">
        <h3 className="text-sm font-medium leading-snug text-primary pr-2">
          {paper.title}
        </h3>
      </div>
      {paper.authors && (
        <p className="text-xs leading-relaxed text-secondary">
          {highlightAuthor(
            paper.coFirstCount
              ? applyCoFirst(paper.authors, paper.coFirstCount)
              : paper.authors
          )}
          {paper.coFirstCount != null && (
            <span className="ml-1.5 text-muted">{coFirstLabel}</span>
          )}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-border-accent bg-surface px-2 py-0.5 font-mono">
            {paper.venue}
          </span>
          <DateBadge className="px-2 py-0.5 text-xs">{paper.year}</DateBadge>
        </div>
        {secondaryCodeHref && (
          <a
            href={secondaryCodeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto font-mono text-accent-green underline-offset-2 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {lang === "zh" ? "代码" : "Code"}
          </a>
        )}
      </div>
    </>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`interactive-module relative px-4 py-3${primaryHref ? " cursor-pointer" : ""}`}
    >
      {primaryHref ? (
        <>
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-0 rounded-lg outline-none ring-inset focus-visible:ring-2 focus-visible:ring-accent-green/40"
            aria-label={openLabel}
          />
          <div className="relative z-10 flex flex-col gap-2 pointer-events-none">{body}</div>
        </>
      ) : (
        <div className="flex flex-col gap-2">{body}</div>
      )}
    </motion.li>
  );
}
