"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiGooglescholar, SiGithub, SiZhihu } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { Play, Pause } from "lucide-react";
import { useLocale } from "@/components/providers/LanguageProvider";

/** 与 hero.socials 顺序一致：Google Scholar、GitHub、知乎、小红书、Email；小红书用文字「小红书」便于辨认 */
const socialIcons = [SiGooglescholar, SiGithub, SiZhihu, null, HiOutlineMail] as const;

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

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audioRef.current = audio;

    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
      }
    };
    audio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.pause();
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // 进度条圆环参数
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

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
        className="relative flex w-full max-w-4xl flex-col rounded-lg border border-border-accent bg-elevated/50 p-8 backdrop-blur-md md:p-12"
        style={{
          boxShadow:
            "0 0 0 1px var(--border-accent), 0 0 40px var(--accent-glow)",
        }}
      >
        {/* 上行：左侧头像 + 右侧文案，顶部对齐 */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
          {/* 左侧：头像唱片播放器 */}
          <motion.div
            variants={item}
            className="relative h-32 w-32 shrink-0 md:h-40 md:w-40"
          >
            {/* 进度圆环 */}
            <svg
              className="absolute inset-0 -rotate-90"
              viewBox="0 0 160 160"
              fill="none"
            >
              {/* 背景轨道 */}
              <circle
                cx="80" cy="80" r={radius}
                stroke="var(--border-accent)"
                strokeWidth="3"
                opacity="0.4"
              />
              {/* 进度弧 */}
              <circle
                cx="80" cy="80" r={radius}
                stroke="var(--accent-green)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-[stroke-dashoffset] duration-300"
              />
            </svg>
            {/* 旋转头像 */}
            <div
              className={`absolute inset-[6px] overflow-hidden rounded-full border-2 border-border-accent bg-surface ${
                isPlaying ? "avatar-spinning" : ""
              }`}
            >
              <Image
                src="/wangshen.jpg"
                alt={hero.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover object-center"
                priority
              />
            </div>
            {/* 播放/暂停按钮 — 底部 */}
            <button
              type="button"
              onClick={togglePlay}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full opacity-80 transition-opacity hover:opacity-100"
              aria-label={isPlaying ? "暂停" : "播放"}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border-accent bg-black/60 backdrop-blur-sm">
                {isPlaying ? (
                  <Pause className="h-4 w-4 text-white" />
                ) : (
                  <Play className="h-4 w-4 translate-x-[1px] text-white" />
                )}
              </div>
            </button>
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
              {hero.tags.map((tag: string, i: number) => (
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
              {hero.socials.map((social: { name: string; href: string }, i: number) => {
                const Icon = socialIcons[i];
                const isXiaohongshu = social.name === "小红书" || social.name === "Xiaohongshu";
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-accent bg-elevated text-secondary transition-colors hover:border-accent-green/50 hover:text-accent-green"
                  >
                    {isXiaohongshu ? (
                      <span className="text-[8px] font-medium leading-none tracking-tight">
                        小红书
                      </span>
                    ) : (
                      Icon != null && <Icon className="h-4 w-4" />
                    )}
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
