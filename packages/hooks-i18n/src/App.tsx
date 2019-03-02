import * as React from 'react';
import { Navbar } from './navbar/Navbar';
import { useTranslation } from './translation/TranslationHook';
import { TranslationContext } from './translation/TranslationContext';

const App = () => {
  const { translation, updateLanguage } = useTranslation();

  return (
    <TranslationContext.Provider value={translation}>
      <Navbar />
      This text is not translated
      <button onClick={updateLanguage}>Change language</button>
    </TranslationContext.Provider>
  );
};

export default App;
