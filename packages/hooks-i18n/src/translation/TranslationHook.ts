import { useState } from 'react';
import { Language } from './Translation';
import { Norwegian } from './norwegian/Norwegian';
import { English } from './english/English';

const findTranslationForLanguage = (language: Language) => {
  switch (language) {
    case Language.NORWEGIAN:
      return Norwegian;
    case Language.ENGLISH:
      return English;
    default:
      throw new Error(`Language ${language} not configured`);
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState(Language.ENGLISH);
  const updateLanguage = () => language === Language.ENGLISH ? setLanguage(Language.NORWEGIAN) : setLanguage(Language.ENGLISH);
  return {
    translation: findTranslationForLanguage(language),
    updateLanguage
  }
};