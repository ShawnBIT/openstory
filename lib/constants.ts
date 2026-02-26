export const site = {
  name: "Open Story",
  title: "推荐算法工程师 · 个人站",
  description: "Exploring the intersection of data, algorithms, and human vibes.",
} as const;

export const hero = {
  name: "WangShen (Shawn)",
  tags: [
    "推荐算法工程师",
    "Vibe Coding爱好者",
    "马拉松初级选手",
  ],
  slogan:
    "Exploring the intersection of data, algorithms, and human vibes.",
  /** 座右铭 */
  motto:
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
  mottoAuthor: "Steve Jobs",
  /** 社交媒体链接（圆形图标，顺序：Google Scholar、GitHub、知乎） */
  socials: [
    { name: "Google Scholar", href: "https://scholar.google.com.hk/citations?user=rvic5IoAAAAJ&hl=zh-CN" },
    { name: "GitHub", href: "https://github.com/ShawnBIT" },
    { name: "知乎", href: "https://www.zhihu.com/people/hellowangshushu" },
  ],
} as const;
