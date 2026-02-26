/** 供 locale 使用的统一内容类型（与 data 层一致，便于双语文案） */
import type { EducationEntry } from "@/content/data/education";
import type { ExperienceEntry } from "@/content/data/experience";
import type { Paper } from "@/content/data/papers";
import type { Competition } from "@/content/data/competitions";
import type { LifeEntry } from "@/content/data/life";
import type { BookEntry } from "@/content/data/books";

export type { EducationEntry, ExperienceEntry, Paper, Competition, LifeEntry, BookEntry };

export type LocaleContent = {
  hero: {
    name: string;
    tags: string[];
    slogan: string;
    motto: string;
    mottoAuthor: string;
    socials: { name: string; href: string }[];
  };
  sectionTitles: {
    education: string;
    experience: string;
    research: string;
    researchSub: string;
    projects: string;
    projectsSub: string;
    competitions: string;
    competitionsSub: string;
    books: string;
    booksSub: string;
    life: string;
    lifeSub: string;
  };
  /** Inline labels for education (lab, advisor, research directions) and experience (mentor), paper (co-first) */
  labels: {
    lab: string;
    advisor: string;
    researchDirections: string;
    mentor: string;
    coFirst: string;
    experienceEmpty: string;
    booksEmpty: string;
  };
  education: EducationEntry[];
  experience: ExperienceEntry[];
  papers: Paper[];
  competitions: Competition[];
  life: LifeEntry[];
  books: BookEntry[];
};
