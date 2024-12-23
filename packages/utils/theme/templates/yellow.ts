import { createTheme } from '@mui/material';
import { defaultStyleComponents } from './defaultStyleComponents';
import { defaultDarkColor, defaultLightColor } from './defaultColors';

export const yellowLightTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#A59400',
      900: '#191a11',
      800: '#726600',
      700: '#A59400',
      600: '#D8C41A',
      500: '#FFEB3E',
      400: '#FFEF69',
      300: '#FFF495',
      200: '#FFF8C0',
      100: '#FFFDEB',
      50: '#eee8de',
    },
    ...defaultLightColor,
    customColor: {
      main: '#FFD700',
      100: '#FFC107',
      gradient:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(229, 226, 207, 0.6) 100%)',
    },
    customColor2: {
      main: '#FFEFBA',
    },
    customColorTable: {
      main: '#FFD700',
      oddRow: '#fffdeb',
    },
  },
});

export const yellowDarkTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#A59400',
      900: '#191a11',
      100: '#726600',
      700: '#A59400',
      600: '#D8C41A',
      500: '#FFEB3E',
      400: '#FFEF69',
      300: '#FFF495',
      200: '#FFF8C0',
      800: '#FFFDEB',
      50: '#262626',
    },
    ...defaultDarkColor,
    customColor: {
      main: '#BFAA00',
      100: '#FFCC00',
      gradient:
        'linear-gradient(90deg, rgba(54, 54, 54, 0.6) 0%, rgba(77, 74, 52, 0.6) 100%)',
    },
    customColor2: {
      main: '#DCCF8E',
    },
    customColorTable: {
      main: '#BFAA00',
      oddRow: '#3f3d2e',
    },
  },
});
