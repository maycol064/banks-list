import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { Sun } from '../../icons/Sun';
import { Moon } from '../../icons/Moon';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full flex justify-between items-center flex-wrap p-4 bg-slate-400 dark:bg-slate-900">
      <h1 className="text-2xl font-bold text-slate-200">Banks List!</h1>
      <button onClick={toggleTheme} className="border-2 rounded-lg p-1">
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};
