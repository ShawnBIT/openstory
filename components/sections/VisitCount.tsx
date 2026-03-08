"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/providers/LanguageProvider";

export function VisitCount() {
  const { lang } = useLocale();
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const label = lang === "zh" ? "本站总访问量" : "Total site visits";
  const suffix = lang === "zh" ? " 次" : " visits";

  useEffect(() => {
    const callbackName = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
    const resolvedRef = { current: false };

    const timeout5 = setTimeout(() => {
      if (resolvedRef.current) return;
      resolvedRef.current = true;
      setFailed(true);
      cleanup();
    }, 5000);

    (window as unknown as Record<string, (data: { site_pv?: number }) => void>)[callbackName] = (
      data: { site_pv?: number }
    ) => {
      if (resolvedRef.current) return;
      resolvedRef.current = true;
      if (typeof data?.site_pv === "number") {
        setCount(data.site_pv);
      } else {
        setFailed(true);
      }
      cleanup();
    };

    let timeout2: ReturnType<typeof setTimeout> | null = null;
    const script = document.createElement("script");
    script.src = `https://busuanzi.ibruce.info/busuanzi?jsonpCallback=${callbackName}`;
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    script.onerror = () => {
      if (resolvedRef.current) return;
      resolvedRef.current = true;
      setFailed(true);
      cleanup();
    };
    script.onload = () => {
      timeout2 = setTimeout(() => {
        if (resolvedRef.current) return;
        resolvedRef.current = true;
        setFailed(true);
        cleanup();
      }, 2000);
    };
    document.head.appendChild(script);

    function cleanup() {
      resolvedRef.current = true;
      clearTimeout(timeout5);
      if (timeout2 != null) clearTimeout(timeout2);
      delete (window as unknown as Record<string, unknown>)[callbackName];
      if (script.parentNode) script.parentNode.removeChild(script);
    }

    return cleanup;
  }, []);

  const display =
    count !== null ? String(count) : failed ? "—" : "...";

  return (
    <section
      aria-label={lang === "zh" ? "网站访问量" : "Site visit count"}
      className="border-t border-border bg-elevated/30 py-3 text-center"
    >
      <p className="text-xs text-muted">
        {label}{" "}
        <span className="font-mono font-medium text-secondary">{display}</span>
        {suffix}
      </p>
    </section>
  );
}
