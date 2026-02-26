"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experienceEntries } from "@/content/data/experience";
import { DateBadge } from "@/components/ui/DateBadge";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Experience
        </h2>
        <p className="text-2xl font-semibold text-primary">工作与实习</p>
        {experienceEntries.length === 0 ? (
          <p className="mt-6 text-sm text-muted">暂无记录，可在 content/data/experience.ts 中填写。</p>
        ) : (
          <ul className="mt-8 space-y-4">
            {experienceEntries.map((entry, i) => (
              <ExperienceItem
                key={`${entry.company}-${entry.period}`}
                entry={entry}
                index={i}
              />
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
}

function ExperienceItem({
  entry,
  index,
}: {
  entry: (typeof experienceEntries)[0];
  index: number;
}) {
  const companyNode = entry.link ? (
    <a
      href={entry.link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:text-accent-green transition-colors"
    >
      {entry.company}
    </a>
  ) : (
    <span className="font-medium text-primary">{entry.company}</span>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex gap-4 rounded-lg border border-border bg-elevated/50 px-4 py-3 backdrop-blur-sm"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface">
        {entry.logo ? (
          <Image
            src={entry.logo}
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
        ) : (
          <Briefcase className="h-5 w-5 text-accent-green" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          {companyNode}
          <DateBadge>{entry.period}</DateBadge>
          {entry.type && (
            <span className="rounded border border-border bg-transparent px-2 py-0.5 font-mono text-xs text-secondary dark:border-[var(--border-accent)] dark:bg-white/[0.03]">
              {entry.type}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm font-semibold text-secondary">
          {entry.role}
          {entry.mentor && (
            <>
              {" · "}
              Mentor：
              {entry.mentorUrl ? (
                <a
                  href={entry.mentorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal text-accent-green hover:underline"
                >
                  {entry.mentor}
                </a>
              ) : (
                <span className="font-normal">{entry.mentor}</span>
              )}
            </>
          )}
        </p>
        {entry.description && (
          Array.isArray(entry.description) ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-secondary">
              {entry.description.map((item, i) => (
                <li key={i}>
                  {typeof item === "string" ? (
                    item
                  ) : (() => {
                    const h = item.highlight;
                    const highlights = Array.isArray(h) ? h : [h];
                    if (highlights.length === 0) return item.text;
                    const regex = new RegExp(
                      `(${highlights.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`
                    );
                    const parts = item.text.split(regex);
                    return (
                      <>
                        {parts.map((part, j) =>
                          highlights.includes(part) ? (
                            <span
                              key={j}
                              className="font-medium text-accent-green"
                            >
                              {part}
                            </span>
                          ) : (
                            part
                          )
                        )}
                      </>
                    );
                  })()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-secondary">
              {entry.description}
            </p>
          )
        )}
      </div>
    </motion.li>
  );
}
