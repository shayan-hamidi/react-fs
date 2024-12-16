import { createTheme } from '@mui/material';
import { defaultStyleComponents } from './defaultStyleComponents';
import { defaultDarkColor, defaultLightColor } from './defaultColors';

export const blueLightTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#0064a5',
      '900': '#001421',
      800: '#003c63',
      700: '#005084',
      600: '#0064a5',
      500: '#1A8DD8',
      400: '#3EB3FF',
      300: '#69C4FF',
      200: '#95D5FF',
      100: '#EBF7FF',
      '50': '#e0e8ed',
    },
    ...defaultLightColor,
    customColor: {
      main: '#FFD700',
      100: '#FFC107',
      gradient:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(215, 229, 236, 0.7) 100%)',
    },
    customColor2: {
      main: '#FFEFBA',
    },
    customColorTable: {
      main: '#FFD700',
      oddRow: '#e6f0f6',
    },
  },
});

export const blueDarkTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1A8DD8',
      '900': '#001421',
      100: '#003c63',
      700: '#005084',
      600: '#0064a5',
      500: '#1A8DD8',
      400: '#3EB3FF',
      300: '#69C4FF',
      200: '#95D5FF',
      800: '#EBF7FF',
      '50': '#262626',
    },
    ...defaultDarkColor,
    customColor: {
      main: '#BFAA00',
      100: '#FFCC00',
      gradient:
        'linear-gradient(90deg, rgba(25, 25, 25, 0.5) 0%, rgba(35, 45, 55, 0.7) 100%)',
    },
    customColor2: {
      main: '#DCCF8E',
    },
    customColorTable: {
      main: '#BFAA00',
      oddRow: '#313b41',
    },
  },
});
