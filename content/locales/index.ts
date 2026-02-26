import type { LocaleContent } from "./types";
import { zhContent } from "./zh";
import { enContent } from "./en";
import { papers } from "@/content/data/papers";

/** 根据语言返回完整内容；论文列表中英共用 */
export function getLocaleContent(lang: "zh" | "en"): LocaleContent {
  if (lang === "en") {
    return { ...enContent, papers };
  }
  return { ...zhContent, papers };
}

export type { LocaleContent } from "./types";
export { zhContent } from "./zh";
export { enContent } from "./en";
