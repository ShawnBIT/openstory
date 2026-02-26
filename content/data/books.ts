export type BookEntry = {
  title: string;
  author: string;
  /** 简短推荐语 */
  note?: string;
  /** 封面图路径，如 /books/xxx.jpg */
  cover?: string;
  /** 购买或详情链接 */
  link?: string;
};

export const bookEntries: BookEntry[] = [
  // 示例：
  // {
  //   title: "书名",
  //   author: "作者",
  //   note: "为什么喜欢 / 一句话推荐",
  //   cover: "/books/xxx.jpg",
  //   link: "https://...",
  // },
];
