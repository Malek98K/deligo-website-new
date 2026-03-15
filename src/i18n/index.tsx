"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

import { en } from "./en";
import { fr } from "./fr";
import { ar } from "./ar";
import { de } from "./de";

const dictionaries = { en, fr, ar, de };
export type Locale = keyof typeof dictionaries;
type Dictionary = typeof en;

interface TranslationContextType {
  locale: Locale;
  t: Dictionary;
  setLocale: (loc: Locale) => void;
  dir: "ltr" | "rtl";
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from cookie on mount
    const saved = Cookies.get("NEXT_LOCALE") as Locale;
    if (saved && dictionaries[saved]) {
      setLocaleState(saved);
    }
    setIsLoaded(true);
  }, []);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    Cookies.set("NEXT_LOCALE", loc, { expires: 365, sameSite: "strict", secure: true });
    // Reload page to apply document directory if needed, or rely on state.
    // For smoothness we just use state, but we need HTML dir attribute to change.
    document.documentElement.dir = loc === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = loc;
  };

  const t = dictionaries[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Prevent hydration mismatch by initially rendering nothing or a shell
  // OR just render default but it might flash. 
  // We'll render standard EN on server and hydrate.
  
  return (
    <TranslationContext.Provider value={{ locale, t, setLocale, dir }}>
      <div dir={dir}>{children}</div>
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
