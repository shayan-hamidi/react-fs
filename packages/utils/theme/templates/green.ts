import { createTheme } from '@mui/material';
import { defaultStyleComponents } from './defaultStyleComponents';
import { defaultDarkColor, defaultLightColor } from './defaultColors';

export const greenLightTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#00A542',
      900: '#00491D',
      800: '#00722E',
      700: '#00A542',
      600: '#1AD866',
      500: '#3EFF8B',
      400: '#69FFA5',
      300: '#95FFBF',
      200: '#C0FFD9',
      100: '#EBFFF3',
      50: '#E1EBE5',
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
      oddRow: '#e6f6ed',
    },
  },
});

export const greenDarkTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#00A542',
      900: '#00491D',
      100: '#00722E',
      700: '#00A542',
      600: '#1AD866',
      500: '#3EFF8B',
      400: '#69FFA5',
      300: '#95FFBF',
      200: '#C0FFD9',
      800: '#EBFFF3',
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
      oddRow: '#314138',
    },
  },
});
