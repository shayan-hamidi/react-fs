import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from 'react';
import { ThemeProvider, Theme, type Direction } from '@mui/material/styles';
import { themes } from './theme';
import { useTranslation } from 'react-i18next';
import { CacheProvider } from '@emotion/react';
import { cacheLtr, cacheRtl } from '../directionCache';

type ThemeName = keyof typeof themes;
type ThemeMode = 'light' | 'dark';
type Language = 'en' | 'fa';

interface FsThemeContextProps {
  theme: Theme;
  setThemeName: (name: ThemeName, mode: ThemeMode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const FsThemeContext = createContext<FsThemeContextProps | undefined>(
  undefined
);

export const useFsTheme = () => {
  const context = useContext(FsThemeContext);
  if (!context) {
    throw new Error('useFsTheme must be used within a FsThemeContextProvider');
  }
  return context;
};

interface FsThemeContextProviderProps {
  children: ReactNode;
}

const FsThemeContextProvider: React.FC<FsThemeContextProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  // Initialize themeName and mode from localStorage or defaults
  const [themeName, setThemeNameState] = useState<ThemeName>(() => {
    const savedTheme = localStorage.getItem('themeName') as ThemeName;
    return savedTheme || 'default';
  });
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode;
    return savedMode || 'light';
  });

  // Initialize language from localStorage or i18n
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('lng') as Language;
    return savedLang || (i18n.language as Language) || 'fa';
  });

  const setThemeName = (name: ThemeName, mode: ThemeMode) => {
    setThemeNameState(name);
    setMode(mode);
    localStorage.setItem('themeName', name);
    localStorage.setItem('themeMode', mode);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
  };

  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  // Update the theme to include direction
  const theme = useMemo(() => {
    const baseTheme = themes[themeName][mode];
    return {
      ...baseTheme,
      direction,
    };
  }, [themeName, mode, direction]);

  // Update the HTML `dir` attribute
  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  // Select Emotion cache based on direction
  const cache = useMemo(
    () => (direction === 'rtl' ? cacheRtl : cacheLtr),
    [direction]
  );

  return (
    <FsThemeContext.Provider
      value={{ theme, setThemeName, language, setLanguage }}
    >
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </FsThemeContext.Provider>
  );
};

export default FsThemeContextProvider;
