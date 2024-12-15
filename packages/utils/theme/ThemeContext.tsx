import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from 'react';
import { ThemeProvider, type Direction } from '@mui/material/styles';
import { themes } from './theme';
import { useTranslation } from 'react-i18next';
import { CacheProvider } from '@emotion/react';
import { cacheLtr, cacheRtl } from '../directionCache';

export type ThemeTemplate = keyof typeof themes;
export type ThemeMode = 'light' | 'dark';
export type Language = 'en' | 'fa';

interface FsThemeContextProps {
  themeTemplate: ThemeTemplate;
  setThemeTemplate: (name: ThemeTemplate) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  fontWeight: number;
  setFontWeight: (weight: number) => void;
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

  const [themeTemplate, setThemeTemplateState] = useState<ThemeTemplate>(() => {
    const savedTheme = localStorage.getItem('themeName') as ThemeTemplate;
    return savedTheme || 'default';
  });
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode;
    return savedMode || 'light';
  });
  const [fontSize, setFontSizeState] = useState<number>(() => {
    const localFontSize = localStorage.getItem('themeFontSize');
    return Number(localFontSize) || 16;
  });
  const [fontWeight, setFontWeightState] = useState<number>(() => {
    const localFontWeight = localStorage.getItem('themeFontWeight');
    return Number(localFontWeight) || 2;
  });
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('lng') as Language;
    return savedLang || (i18n.language as Language) || 'fa';
  });

  const setThemeTemplate = (name: ThemeTemplate) => {
    setThemeTemplateState(name);
    localStorage.setItem('themeName', name);
  };

  const setMode = (mode: ThemeMode) => {
    setModeState(mode);
    localStorage.setItem('themeMode', mode);
  };

  const setFontSize = (size: number) => {
    setFontSizeState(size);
    localStorage.setItem('themeFontSize', size.toString());
  };

  const setFontWeight = (weight: number) => {
    setFontWeightState(weight);
    localStorage.setItem('themeFontWeight', weight.toString());
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
  };

  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  const scaleTypography = (baseSize: number, weightLevel: number) => {
    const baseWeights: any = {
      1: 300,
      2: 400,
      3: 500,
      4: 700,
      5: 900,
    };
    const fontWeight = baseWeights[weightLevel] || 400;

    return {
      fontSize: baseSize,
      h1: { fontSize: baseSize * 2.5, fontWeight: fontWeight + 200 },
      h2: { fontSize: baseSize * 2.25, fontWeight: fontWeight + 150 },
      h3: { fontSize: baseSize * 2, fontWeight: fontWeight + 100 },
      h4: { fontSize: baseSize * 1.75, fontWeight: fontWeight },
      h5: { fontSize: baseSize * 1.5, fontWeight: fontWeight },
      h6: { fontSize: baseSize * 1.25, fontWeight: fontWeight },
      subtitle1: { fontSize: baseSize * 1.1, fontWeight: fontWeight },
      subtitle2: { fontSize: baseSize, fontWeight: fontWeight },
      body1: { fontSize: baseSize * 0.9, fontWeight: fontWeight },
      body2: { fontSize: baseSize * 0.8, fontWeight: fontWeight - 100 },
      caption: { fontSize: baseSize * 0.75, fontWeight: fontWeight - 100 },
      button: { fontSize: baseSize * 0.85, fontWeight: fontWeight + 100 },
      overline: { fontSize: baseSize * 0.7, fontWeight: fontWeight - 100 },
    };
  };

  const theme = useMemo(() => {
    const baseTheme = themes[themeTemplate][mode];
    return {
      ...baseTheme,
      typography: {
        ...baseTheme?.typography,
        ...scaleTypography(fontSize, fontWeight),
      },
      direction,
    };
  }, [themeTemplate, mode, direction, fontSize, fontWeight]);

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  const cache = useMemo(
    () => (direction === 'rtl' ? cacheRtl : cacheLtr),
    [direction]
  );

  useEffect(() => {
    const localMode = localStorage.getItem('themeMode');
    const localThemeName = localStorage.getItem('themeName');
    const localFontSize = localStorage.getItem('themeFontSize');
    const localFontWeigth = localStorage.getItem('themeFontWeight');
    if (!localMode) localStorage.setItem('themeMode', 'light');
    if (!localThemeName) localStorage.setItem('themeName', 'default');
    if (!localFontSize) localStorage.setItem('themeFontSize', '16');
    if (!localFontWeigth) localStorage.setItem('themeFontWeight', '2');
  }, []);

  return (
    <FsThemeContext.Provider
      value={{
        themeTemplate,
        setThemeTemplate,
        mode,
        setMode,
        language,
        setLanguage,
        fontSize,
        setFontSize,
        fontWeight,
        setFontWeight,
      }}
    >
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </FsThemeContext.Provider>
  );
};

export default FsThemeContextProvider;
