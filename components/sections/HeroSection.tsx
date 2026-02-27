"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiGooglescholar, SiGithub, SiZhihu } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { useLocale } from "@/components/providers/LanguageProvider";

const socialIcons = [SiGooglescholar, SiGithub, SiZhihu, HiOutlineMail] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function HeroSection() {
  const { content } = useLocale();
  const hero = content.hero;
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-6 pt-14"
    >
      {/* 线性边框 + 毛玻璃容器：左侧头像位 + 右侧文案居中 + 下方座右铭预留 */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative flex w-full max-w-4xl flex-col rounded-lg border border-border-accent bg-elevated/50 p-8 shadow-[0_0_0_1px_var(--border)] backdrop-blur-md md:p-12"
        style={{
          boxShadow:
            "0 0 0 1px var(--border-accent), 0 0 40px var(--accent-glow)",
        }}
      >
        {/* 上行：左侧头像 + 右侧文案，顶部对齐 */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
          {/* 左侧：圆形头像 */}
          <motion.div
            variants={item}
            className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border-accent bg-surface md:h-40 md:w-40"
          >
            <Image
              src="/wangshen.jpg"
              alt={hero.name}
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover object-center"
              priority
            />
          </motion.div>
          {/* 右侧：文案与图标与左边图片顶部对齐，水平居中 */}
          <div className="flex min-w-0 flex-1 flex-col items-center justify-start pt-0 text-center sm:pt-1">
            <motion.h1
              variants={item}
              className="font-sans text-3xl font-semibold tracking-tight text-primary md:text-4xl"
            >
              {hero.name}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-3.5 flex flex-nowrap items-center justify-center gap-x-1.5 whitespace-nowrap text-sm md:text-base"
              style={{ color: "var(--accent-green)" }}
            >
              {hero.tags.map((tag, i) => (
                <span key={tag} className="inline-flex shrink-0 items-center gap-1.5 font-medium tracking-tight">
                  {i > 0 && (
                    <span className="select-none opacity-60" aria-hidden>
                      /
                    </span>
                  )}
                  {tag}
                </span>
              ))}
            </motion.p>
            <p
              className="mt-4 max-w-lg font-mono text-xs leading-loose md:text-sm whitespace-nowrap"
              style={{ color: "var(--text-primary)" }}
            >
              {hero.slogan}
            </p>
            {/* 社交媒体：圆形图标链接 */}
            <motion.div
              variants={item}
              className="mt-4 flex items-center justify-center gap-3"
            >
              {hero.socials.map((social, i) => {
                const Icon = socialIcons[i];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-accent bg-elevated text-secondary transition-colors hover:border-accent-green/50 hover:text-accent-green"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
        {/* 下方：座右铭，斜体 + 淡入动效 */}
        <div className="mt-8 w-full border-t border-border pt-4">
          <motion.blockquote
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-base italic leading-relaxed text-secondary"
          >
            <p className="tracking-wide">
              &ldquo;{hero.motto}&rdquo;
            </p>
            <footer className="mt-2 text-right text-sm not-italic text-muted tracking-widest">
              — {hero.mottoAuthor}
            </footer>
          </motion.blockquote>
        </div>
      </motion.div>
    </section>
  );
}
