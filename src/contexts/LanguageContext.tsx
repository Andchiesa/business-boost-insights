import React, { createContext, useContext, useState, ReactNode } from "react";
import { TEXTS_PT } from "@/constants/texts/pt";
import { TEXTS_EN } from "@/constants/texts/en";
import { TEXTS_ES } from "@/constants/texts/es";

type Language = "pt" | "en" | "es";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  texts: typeof TEXTS_PT;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const texts = language === "en" ? TEXTS_EN : language === "es" ? TEXTS_ES : TEXTS_PT;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

