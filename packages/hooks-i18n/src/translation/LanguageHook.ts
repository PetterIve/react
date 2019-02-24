import { useState } from 'react';
import { Language } from './Dictionary';
import { Norwegian } from './Norwegian';
import { English } from './English';

const dictionaryForLanguage = (language: Language) => {
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
  return {
    translation: dictionaryForLanguage(language),
    setLanguage
  }
};