import { createTheme } from '@mui/material';
import { defaultStyleComponents } from './defaultStyleComponents';
import { defaultDarkColor, defaultLightColor } from './defaultColors';

export const defaultLightTheme = createTheme(
  {
    components: { ...defaultStyleComponents },
    spacing: (abs: number) => `${0.35 * abs}rem`,
    palette: {
      mode: 'light',
      primary: {
        main: '#00A594',
        '50': '#E9EFEE',
        '100': '#EBFFFD',
        '200': '#C0FFF8',
        '300': '#95FFF4',
        '400': '#69FFEF',
        '500': '#1AD8C4',
        '600': '#00A594',
        '700': '#007C6F',
        '800': '#00534B',
        '900': '#00A594',
      },
      ...defaultLightColor,
      customColor: {
        main: '#ff5722',
        100: 'red',
        gradient:
          'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(215, 229, 236, 0.7) 100%)',
      },
      customColor2: {
        main: '#795548',
      },
      customColorTable: {
        main: '',
        oddRow: '#0064A51A',
      },
    },
  },
);

export const defaultDarkTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1AD8C4',
      '50': '#262626',
      '100': '#00A594',
      '200': '#00534B',
      '300': '#007C6F',
      '400': '#1AD8C4',
      '500': '#69FFEF',
      '600': '#95FFF4',
      '700': '#00A594',
      '800': '#C0FFF8',
      '900': '#00A5941A',
    },
    ...defaultDarkColor,
    customColor: {
      main: '#ff8a50',
      100: '#ff3d00',
      gradient:
        'linear-gradient(90deg, rgba(25, 25, 25, 0.5) 0%, rgba(35, 45, 55, 0.7) 100%)',
    },
    customColor2: {
      main: '#d7ccc8',
    },
    customColorTable: {
      main: '#1A8DD8',
      oddRow: '#313b41',
    },
  },
});
