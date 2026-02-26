import { cn } from "@/lib/utils";

/** 统一时间展示：圆角描边块，双模式都无灰底，深色用略亮描边提层次 */
export function DateBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-md border border-border bg-transparent px-2.5 py-1 font-mono text-sm text-primary",
        "dark:border-[var(--border-accent)] dark:bg-white/[0.03]",
        className
      )}
    >
      {children}
    </span>
  );
}
