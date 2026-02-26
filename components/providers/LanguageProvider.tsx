"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getLocaleContent, type LocaleContent } from "@/content/locales";

const STORAGE_KEY = "lang";

export type Locale = "zh" | "en";

const LocaleContext = createContext<{
  lang: Locale;
  setLang: (lang: Locale) => void;
  toggleLang: () => void;
  content: LocaleContent;
} | null>(null);

function getInitialLang(): Locale {
  if (typeof window === "undefined") return "zh";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === "zh" || stored === "en") return stored;
  return "zh";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(getInitialLang());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [mounted, lang]);

  const setLang = useCallback((next: Locale) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "zh" ? "en" : "zh"));
  }, []);

  const content = useMemo(() => getLocaleContent(lang), [lang]);

  return (
    <LocaleContext.Provider
      value={{ lang, setLang, toggleLang, content }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LanguageProvider");
  return ctx;
}
