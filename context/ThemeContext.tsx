import React, { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import { Theme, ThemeContextType } from '../types/theme';

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

interface PropsProvider {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: PropsProvider) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    theme === 'dark'
      ? document.querySelector('body')?.classList.add('dark')
      : document.querySelector('body')?.classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
