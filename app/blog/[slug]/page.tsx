type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return (
    <main className="min-h-screen px-6 pt-24 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold text-primary">Post: {slug}</h1>
        <p className="mt-4 text-secondary">正文由 Markdown + gray-matter 解析后渲染。</p>
      </div>
    </main>
  );
}
