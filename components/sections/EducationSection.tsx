"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { educationEntries } from "@/content/data/education";
import { DateBadge } from "@/components/ui/DateBadge";

export function EducationSection() {
  return (
    <section id="education" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Education
        </h2>
        <p className="text-2xl font-semibold text-primary">教育背景</p>
        <ul className="mt-8 space-y-4">
          {educationEntries.map((entry, i) => (
            <EducationItem key={`${entry.school}-${entry.period}`} entry={entry} index={i} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function EducationItem({
  entry,
  index,
}: {
  entry: (typeof educationEntries)[0];
  index: number;
}) {
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
          <GraduationCap className="h-5 w-5 text-accent-green" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="font-medium text-primary">{entry.school}</h3>
          <DateBadge>{entry.period}</DateBadge>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-secondary">
          <span>{entry.degree}</span>
          {entry.major && (
            <>
              <span className="text-muted">·</span>
              <span>{entry.major}</span>
            </>
          )}
          {entry.gpa && (
            <>
              <span className="text-muted">·</span>
              <span>{entry.gpa}</span>
            </>
          )}
        </div>
        {(entry.lab || entry.advisor || (entry.researchDirections && entry.researchDirections.length > 0)) && (
          <p className="mt-2 text-sm text-secondary">
            {entry.lab && <>实验室：{entry.lab}</>}
            {entry.lab && entry.advisor && "；"}
            {entry.advisor && (
              <>
                导师：
                {entry.advisorUrl ? (
                  <a
                    href={entry.advisorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-green hover:underline"
                  >
                    {entry.advisor}
                  </a>
                ) : (
                  entry.advisor
                )}
              </>
            )}
            {entry.advisor && entry.researchDirections?.length ? "；" : ""}
            {entry.researchDirections && entry.researchDirections.length > 0 && (
              <>研究方向：{entry.researchDirections.join("、")}</>
            )}
          </p>
        )}
        {entry.description && (
          <p className="mt-2 text-sm leading-relaxed text-secondary">
            {entry.description}
          </p>
        )}
      </div>
    </motion.li>
  );
}
