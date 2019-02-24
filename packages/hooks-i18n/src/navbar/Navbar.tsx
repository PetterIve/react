import * as React from 'react';
import { useContext } from 'react';
import { TranslationContext } from '../translation/TranslationContext';

export const Navbar = () => {
  const translation = useContext(TranslationContext);
  return (
    <nav>
      {translation.greeting}
    </nav>
  )
};