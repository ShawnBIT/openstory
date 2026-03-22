"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/components/providers/LanguageProvider";
import type { ProjectEntry } from "@/content/data/projects";

export function ProjectsSection() {
  const { content, lang } = useLocale();
  const { sectionTitles, labels, projects } = content;
  return (
    <section id="projects" className="border-t border-border py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-mono text-sm font-medium text-accent-green mb-2">
          Projects (Vibe Coding)
        </h2>
        <p className="text-2xl font-semibold text-primary">{sectionTitles.projects}</p>
        {sectionTitles.projectsSub && (
          <p className="mt-1 text-sm text-muted">{sectionTitles.projectsSub}</p>
        )}
        {projects.length === 0 ? (
          <p className="mt-6 text-sm text-muted">
            {labels.projectsEmpty ?? "No projects yet. Add content in content/data/projects.ts."}
          </p>
        ) : (
          <ul className="mt-8 space-y-4">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                lang={lang}
              />
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  lang,
}: {
  project: ProjectEntry;
  index: number;
  lang: "zh" | "en";
}) {
  const name = lang === "en" && project.nameEn ? project.nameEn : project.name;
  const description =
    lang === "en" && project.descriptionEn
      ? project.descriptionEn
      : project.description;
  const tagline =
    lang === "en" && project.taglineEn ? project.taglineEn : project.tagline;
  const highlightSource =
    lang === "en" && project.descriptionHighlightEn
      ? project.descriptionHighlightEn
      : project.descriptionHighlight;
  const techStack =
    lang === "en" && project.techStackEn
      ? project.techStackEn
      : project.techStack;
  const highlights =
    lang === "en" && project.highlightsEn
      ? project.highlightsEn
      : project.highlights;

  const descriptionNode = highlightSource
    ? (() => {
        const highlightsArr = Array.isArray(highlightSource)
          ? highlightSource
          : [highlightSource];
        if (!highlightsArr.length) return description;
        const regex = new RegExp(
          `(${highlightsArr
            .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
            .join("|")})`
        );
        const parts = description.split(regex);
        return (
          <>
            {parts.map((part, j) =>
              highlightsArr.includes(part) ? (
                <span key={j} className="font-medium text-accent-green">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </>
        );
      })()
    : description;

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-3 rounded-lg border border-border bg-elevated/50 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:border-accent-green hover:bg-elevated hover:ring-2 hover:ring-accent-green/20 cursor-pointer sm:flex-row sm:items-start sm:gap-4 md:px-5 md:py-4"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-200 group-hover:border-accent-green/50">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={name}
              fill
              sizes="56px"
              className="object-contain p-1.5"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-xs text-muted">
              {name.slice(0, 3)}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-semibold text-primary transition-colors duration-200 group-hover:text-accent-green">
              {name}
            </span>
            {project.period && (
              <span className="inline-flex shrink-0 rounded-md bg-black/80 px-2.5 py-1 font-mono text-xs text-white/90 dark:bg-white/10 dark:text-primary">
                {project.period}
              </span>
            )}
            <ExternalLink className="h-3.5 w-3.5 text-muted transition-all duration-200 group-hover:text-accent-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          {tagline && (
            <p className="mt-0.5 text-sm font-medium leading-snug text-primary">
              {tagline}
            </p>
          )}
          <p className="mt-1 text-sm leading-relaxed text-secondary">
            {descriptionNode}
          </p>
          {techStack && techStack.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border-accent bg-surface px-2 py-0.5 text-[11px] font-mono text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {highlights && highlights.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-muted">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      </a>
    </motion.li>
  );
}
