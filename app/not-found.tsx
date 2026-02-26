import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-2xl font-semibold text-primary">404</h1>
      <p className="text-secondary">页面不存在</p>
      <Link href="/" className="text-accent-green hover:underline">
        返回首页
      </Link>
    </div>
  );
}
