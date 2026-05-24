import { createContext, useEffect, useMemo, useState } from 'react';
import ar from '../locales/ar.json';
import en from '../locales/en.json';

const dictionaries = { ar, en };
const directions = { ar: 'rtl', en: 'ltr' };

export const I18nContext = createContext(null);

function readInitialLanguage() {
  return localStorage.getItem('language') || 'ar';
}

function translate(dictionary, key) {
  return key.split('.').reduce((value, part) => value?.[part], dictionary) || key;
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(readInitialLanguage);
  const dictionary = dictionaries[language] || dictionaries.en;
  const dir = directions[language] || directions.en;

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [dir, language]);

  const value = useMemo(
    () => ({
      dir,
      language,
      setLanguage,
      t: (key) => translate(dictionary, key),
    }),
    [dictionary, dir, language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
