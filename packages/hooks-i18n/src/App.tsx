import * as React from 'react';
import { Navbar } from './navbar/Navbar';
import { useTranslation } from './translation/LanguageHook';
import { Language } from './translation/Dictionary';
import { TranslationContext } from './translation/TranslationContext';

const App = () => {
  const { translation, setLanguage } = useTranslation();
  const updateLanguage = () => translation.language === Language.ENGLISH ? setLanguage(Language.NORWEGIAN) : setLanguage(Language.ENGLISH)
  return (
    <TranslationContext.Provider value={translation}>
      <Navbar />
      This text is not translated
      <button onClick={updateLanguage}>Change language</button>
    </TranslationContext.Provider>
  )
};

export default App;