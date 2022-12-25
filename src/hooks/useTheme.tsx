import { createContext, ReactNode, useContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import usePersistedState from './usePersistedState';

interface MyThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  selectedTheme: DefaultTheme;
  changeTheme: (value: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

function MyThemeProvider({ children }: MyThemeProviderProps) {
  const [themePersisted, setThemePersisted] = usePersistedState('theme', 'light');
  const [selectedTheme, setSelectedTheme] = useState(
    themePersisted === 'light' ? light : dark,
  );

  function changeTheme(value: string) {
    value === 'light' ? setSelectedTheme(light) : setSelectedTheme(dark);
    setThemePersisted(value === 'light' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ selectedTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemes() {
  const context = useContext(ThemeContext);
  return context;
}

export default MyThemeProvider;
