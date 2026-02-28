/**
 * 推荐的 AI 工具列表
 */
export type ToolEntry = {
  name: string;
  /** 英文名称（可选，英文模式下使用） */
  nameEn?: string;
  /** 工具简介或推荐语正文 */
  description: string;
  /** 英文推荐语（可选，英文模式下使用） */
  descriptionEn?: string;
  /** 官网或使用链接 */
  href: string;
  /** 可选：分类标签，如 写作 / 编程 / 图像 */
  tag?: string;
  /** 英文标签（可选） */
  tagEn?: string;
  /** 可选：封面/Logo 路径，如 /tools/xxx.png */
  logo?: string;
  /** 可选：一句吸引人的标题/口号，展示在名称下方 */
  headline?: string;
  /** 英文标题/口号（可选） */
  headlineEn?: string;
  /** 可选：推荐语中需要高亮的句子（中文） */
  descriptionHighlight?: string;
  /** 可选：推荐语中需要高亮的句子（英文） */
  descriptionHighlightEn?: string;
};

export const toolEntries: ToolEntry[] = [
  {
    name: "闪电说",
    nameEn: "Shandianshuo",
    headline: "告别打字，体验「嘴速即手速」的快感！🚀",
    headlineEn: "Stop typing—experience “speech-speed is typing-speed”! 🚀",
    description:
      "终于找到了打字效率的「物理外挂」——闪电说。它最硬核的地方在于零延迟，说完即出，完全没有普通语音输入的「转圈圈」等待感。我特意记录了一下：比起我平时手机敲键盘，闪电说让我的录入效率直接飙升了 3-5 倍！以前要打一分钟的长回复，现在 10 几秒语音说完就搞定。如果你也追求极致的录入效率，这款工具绝对是旦用难回，早用早享受！",
    descriptionEn:
      "I finally found the “physical cheat” for typing efficiency—Shandianshuo. The best part is zero latency: words appear as you speak, with none of the usual “spinning wheel” wait of voice input. I timed it: compared to typing on my phone, Shandianshuo boosted my input speed by 3–5×. What used to take a minute to type now takes a little over 10 seconds of speech. If you care about input efficiency, this tool is a game-changer.",
    href: "https://shandianshuo.cn/",
    tag: "语音输入",
    tagEn: "Voice input",
    logo: "/tools/shandianshuo.png",
    descriptionHighlight: "它最硬核的地方在于零延迟，说完即出",
    descriptionHighlightEn: "The best part is zero latency: words appear as you speak",
  },
];
