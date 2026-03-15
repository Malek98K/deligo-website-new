"use client";

import { useTranslation, Locale } from "@/i18n";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const flags: Record<Locale, { name: string; flag: string }> = {
    en: { name: "English", flag: "🇬🇧" },
    fr: { name: "Français", flag: "🇫🇷" },
    ar: { name: "العربية", flag: "🇹🇳" },
    de: { name: "Deutsch", flag: "🇩🇪" },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center bg-surface-50 border border-surface-200 rounded-full hover:bg-surface-100 transition-colors shadow-sm text-lg"
        title="Change Language"
      >
        {flags[locale].flag}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-surface-200 shadow-xl rounded-2xl py-2 flex flex-col gap-1 w-36 z-[100] animate-in fade-in slide-in-from-top-2">
          {(Object.keys(flags) as Locale[]).map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2 hover:bg-surface-50 transition-colors text-sm font-medium ${
                locale === loc ? "text-brand" : "text-surface-800"
              }`}
            >
              <span className="text-xl">{flags[loc].flag}</span>
              {flags[loc].name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
