// 读取 content/blog 下的 Markdown，解析 frontmatter，供博客列表与正文使用
// 后续可接入 gray-matter + remark/rehype + Shiki

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  // TODO: fs.readdir + gray-matter
  return [];
}

export async function getBlogPost(slug: string) {
  // TODO: 读取 content/blog/${slug}.md，解析并返回
  return null;
}
