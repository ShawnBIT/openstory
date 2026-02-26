"use client";

import Script from "next/script";
import { useLocale } from "@/components/providers/LanguageProvider";

export function VisitCount() {
  const { lang } = useLocale();
  const label = lang === "zh" ? "本站总访问量" : "Total site visits";
  const suffix = lang === "zh" ? " 次" : " visits";

  return (
    <section
      aria-label={lang === "zh" ? "网站访问量" : "Site visit count"}
      className="border-t border-border bg-elevated/30 py-3 text-center"
    >
      <Script
        src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
        strategy="afterInteractive"
      />
      <p className="text-xs text-muted">
        {label}{" "}
        <span id="busuanzi_value_site_pv" className="font-mono font-medium text-secondary">
          -
        </span>
        {suffix}
      </p>
    </section>
  );
}
