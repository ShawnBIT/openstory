import { hero } from "@/lib/constants";
import { educationEntries } from "@/content/data/education";
import { experienceEntries } from "@/content/data/experience";
import { papers } from "@/content/data/papers";
import { competitions } from "@/content/data/competitions";
import { lifeEntries } from "@/content/data/life";
import { bookEntries } from "@/content/data/books";
import type { LocaleContent } from "./types";

export const zhContent: LocaleContent = {
  hero: {
    name: hero.name,
    tags: [...hero.tags],
    slogan: hero.slogan,
    motto: hero.motto,
    mottoAuthor: hero.mottoAuthor,
    socials: hero.socials.map((s) => ({ name: s.name, href: s.href })),
  },
  sectionTitles: {
    education: "教育背景",
    experience: "工作与实习",
    research: "论文",
    researchSub: "来源 Google Scholar",
    projects: "AI 辅助开发项目",
    projectsSub: "展示通过 AI 辅助开发的小型产品，突出创新和速度感。数据来自 content/data/projects.json。",
    competitions: "比赛经历",
    competitionsSub: "",
    books: "喜欢的书",
    booksSub: "",
    life: "生活与相册",
    lifeSub: "",
  },
  labels: {
    lab: "实验室",
    advisor: "导师",
    researchDirections: "研究方向",
    mentor: "导师",
    coFirst: "† 共同一作",
    experienceEmpty: "暂无记录，可在 content/data/experience.ts 中填写。",
    booksEmpty: "暂无书目，可在 content/data/books.ts 中填写。",
  },
  education: educationEntries,
  experience: experienceEntries,
  papers,
  competitions,
  life: lifeEntries,
  books: bookEntries,
};
