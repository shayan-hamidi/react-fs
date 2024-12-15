import { createTheme } from '@mui/material';
import { defaultStyleComponents } from './defaultStyleComponents';
import { defaultDarkColor, defaultLightColor } from './defaultColors';

export const brownLightTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#996100',
      900: '#191a11',
      800: '#664000',
      700: '#996100',
      600: '#CC8100',
      500: '#FFA100',
      400: '#FFB639',
      300: '#FFCB73',
      200: '#FFE0AC',
      100: '#FFF5E5',
      50: '#eee8de',
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
      oddRow: '#fff6e6',
    },
  },
});

export const brownDarkTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#CC8100',
      900: '#191a11',
      100: '#664000',
      700: '#996100',
      600: '#CC8100',
      500: '#FFA100',
      400: '#FFB639',
      300: '#FFCB73',
      200: '#FFE0AC',
      800: '#FFF5E5',
      50: '#262626',
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
      oddRow: '#4a4131',
    },
  },
});
