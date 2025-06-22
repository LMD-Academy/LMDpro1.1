
"use client";

import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

type Language = 'English' | 'Arabic';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('English');

  useEffect(() => {
    try {
        const savedLanguage = localStorage.getItem('lmdpro-language') as Language;
        if (savedLanguage && (savedLanguage === 'English' || savedLanguage === 'Arabic')) {
            setLanguageState(savedLanguage);
            document.documentElement.lang = savedLanguage === 'Arabic' ? 'ar' : 'en';
            document.documentElement.dir = savedLanguage === 'Arabic' ? 'rtl' : 'ltr';
        }
    } catch (error) {
        console.warn("Could not access localStorage for language preference:", error);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    try {
        localStorage.setItem('lmdpro-language', newLanguage);
        document.documentElement.lang = newLanguage === 'Arabic' ? 'ar' : 'en';
        document.documentElement.dir = newLanguage === 'Arabic' ? 'rtl' : 'ltr';
    } catch (error) {
        console.warn("Could not save language preference to localStorage:", error);
    }
  };

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
