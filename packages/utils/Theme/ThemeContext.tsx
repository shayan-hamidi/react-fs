import { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { themes } from '@fs/utils';

type ThemeName = keyof typeof themes;
type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  setThemeName: (name: ThemeName, mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [themeName, setThemeNameState] = useState<ThemeName>('default');
  const [mode, setMode] = useState<ThemeMode>('light');

  const setThemeName = (name: ThemeName, mode: ThemeMode) => {
    setThemeNameState(name);
    setMode(mode);
  };

  const theme = themes[themeName][mode];

  return (
    <ThemeContext.Provider value={{ theme, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
