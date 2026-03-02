/**
 * Vibe Coding 项目列表
 */
export type ProjectEntry = {
  id: string;
  /** 项目名称（中文） */
  name: string;
  /** 项目名称（英文，可选） */
  nameEn?: string;
  /** 时间或周期，如 2025.02 / 2025.02 — now */
  period?: string;
  /** 简要说明（中文） */
  description: string;
  /** 简要说明（英文，可选） */
  descriptionEn?: string;
  /** 可选：标题下的一句话 Tagline（中文） */
  tagline?: string;
  /** 可选：标题下的一句话 Tagline（英文） */
  taglineEn?: string;
  /** 可选：需要高亮的中文摘要片段，可为单个字符串或字符串数组 */
  descriptionHighlight?: string | string[];
  /** 可选：需要高亮的英文摘要片段，可为单个字符串或字符串数组 */
  descriptionHighlightEn?: string | string[];
  /** GitHub 仓库地址 */
  repo: string;
  /** 可选：项目主页或 Demo 地址 */
  homepage?: string;
  /** 可选：封面或 Logo 路径，如 /projects/xxx.png */
  logo?: string;
  /** 可选：技术栈标签（中文） */
  techStack?: string[];
  /** 可选：技术栈标签（英文） */
  techStackEn?: string[];
  /** 可选：高亮信息（中文） */
  highlights?: string[];
  /** 可选：高亮信息（英文） */
  highlightsEn?: string[];
};

export const projectEntries: ProjectEntry[] = [
  {
    id: "reco-arxiv-daily",
    name: "Reco-Arxiv-Daily",
    nameEn: "Reco-Arxiv-Daily",
    period: "2026.03",
    tagline: "面向推荐系统研究者的自动化论文日报",
    taglineEn: "Automated daily arXiv feed for recommender systems",
    description:
      "每天定时从 arXiv 的 cs.IR 中抓取最新推荐系统论文，按标题规则自动打上 GR / LLM / Seq / Scaling / Other 标签，并生成多份 Markdown（README、docs、daily_new、topic-recommendation、wechat），方便在 GitHub 与公众号等渠道同步更新。同时，项目只将“相对历史新增”的论文通过飞书机器人推送到群里，用紧凑的「日期 + 多彩 Tag + 作者 | 标题链接」格式展示，大幅降低信息筛选成本。",
    descriptionEn:
      "Reco-Arxiv-Daily is an automated daily feed for recommender-system papers. It periodically fetches the latest Recommender System papers from arXiv cs.IR with keyword filtering, classifies them into GR / LLM / Seq / Scaling / Other tags based on title rules, and generates multiple Markdown views (README, docs, daily_new, topic-recommendation, wechat). Only newly added papers compared to history are pushed to Feishu as compact cards in the format of date + colorful tags + authors | title link, making it much easier to track what truly changed today.",
    descriptionHighlight: [
      "自动打上 GR / LLM / Seq / Scaling / Other 标签",
      "论文通过飞书机器人推送到群里",
    ],
    repo: "https://github.com/ShawnBIT/reco-arxiv-daily",
    logo: "/projects/reco-arxiv-daily.png",
  },
];

