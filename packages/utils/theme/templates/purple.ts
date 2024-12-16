import { createTheme } from '@mui/material';
import { defaultStyleComponents } from './defaultStyleComponents';
import { defaultDarkColor, defaultLightColor } from './defaultColors';

export const purpleLightTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#651AD8',
      '50': '#E7E5EB',
      '100': '#F3EBFF',
      '200': '#D9C0FF',
      '300': '#BE95FF',
      '400': '#A469FF',
      '500': '#8A3EFF',
      '600': '#651AD8',
      '700': '#4100A5',
      '800': '#2D0072',
      '900': '#1d0148',
    },
    ...defaultLightColor,
    customColor: {
      main: '#FFD700',
      100: '#FFC107',
      gradient:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgb(217 215 236 / 70%) 100%)',
    },
    customColor2: {
      main: '#FFEFBA',
    },
    customColorTable: {
      main: '#FFD700',
      oddRow: '#EBEDFF',
    },
  },
});

export const purpleDarkTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#8A3EFF',
      '50': '#262626',
      '800': '#F3EBFF',
      '200': '#D9C0FF',
      '300': '#BE95FF',
      '400': '#A469FF',
      '500': '#8A3EFF',
      '600': '#651AD8',
      '700': '#4100A5',
      '100': '#2D0072',
      '900': '#1d0148',
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
      oddRow: '#8A3EFF26',
    },
  },
});
