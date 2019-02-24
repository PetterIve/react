import * as React from 'react';
import { Navbar } from './navbar/Navbar';
import { Language } from './translation/Dictionary';
import { Norwegian } from './translation/Norwegian';
import { English } from './translation/English';

const App = () => {
  const [ language, setLanguage ] = React.useState(Language.ENGLISH);
  const updateLanguage = () => {
    language === Language.ENGLISH ? setLanguage(Language.NORWEGIAN) : setLanguage(Language.ENGLISH);
  }
  return (
    <div>
      <Navbar dictionary={language === Language.ENGLISH ? English : Norwegian}/>
      Test
      <button onClick={updateLanguage}>Change language</button>
    </div>
  )
};

export default App;