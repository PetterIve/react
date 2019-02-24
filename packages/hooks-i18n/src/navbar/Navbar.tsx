import * as React from 'react';
import { Dictionary } from '../translation/Dictionary';

interface NavbarProps {
  dictionary: Dictionary;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <nav>
      {props.dictionary.greeting}
    </nav>
  )
}