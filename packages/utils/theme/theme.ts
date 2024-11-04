import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColor1: Palette['primary'];
    customColor2: Palette['primary'];
  }
  interface PaletteOptions {
    customColor1?: PaletteOptions['primary'];
    customColor2?: PaletteOptions['primary'];
  }
}

// Default light and dark theme
const defaultLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00A594',
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
    secondary: {
      main: '#535353',
      '900': '#000',
      '800': '#232424',
      '700': '#3F3E3E',
      '600': '#535353',
      '500': '#676767',
      '400': '#909090',
      '300': '#B9B9B9',
      '200': '#E2E2E2',
      '100': '#F6F6F6',
    },
    error: {
      main: '#A50011',
      '900': '#A50011',
      '800': '#72000C',
      '700': '#A50011',
      '600': '#D81A2E',
      '500': '#FF3E52',
      '400': '#FF6979',
      '300': '#FF95A0',
      '200': '#FFC0C7',
      '100': '#FFEBED',
    },
    warning: {
      main: '#FFA100',
      '900': '#FFA100',
      '800': '#664000',
      '700': '#996100',
      '600': '#CC8100',
      '500': '#FFA100',
      '400': '#FFB639',
      '300': '#FFCB73',
      '200': '#FFE0AC',
      '100': '#FFF5E5',
    },
    info: {
      main: '#0064a5',
      '900': '#EBF7FF',
      '800': '#003c63',
      '700': '#005084',
      '600': '#0064a5',
      '500': '#1A8DD8',
      '400': '#3EB3FF',
      '300': '#69C4FF',
      '200': '#95D5FF',
      '100': '#EBF7FF',
    },
    success: {
      main: '#00A542',
      '900': '#00491D',
      '800': '#00722E',
      '700': '#00A542',
      '600': '#1AD866',
      '500': '#3EFF8B',
      '400': '#69FFA5',
      '300': '#95FFBF',
      '200': '#C0FFD9',
      '100': '#EBFFF3',
    },
    customColor1: {
      main: '#ff5722',
    },
    customColor2: {
      main: '#795548',
    },
  },
});

const defaultDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    error: { main: '#e57373' },
    warning: { main: '#ffb74d' },
    info: { main: '#64b5f6' },
    success: { main: '#81c784' },
    customColor1: { main: '#ff7043' },
    customColor2: { main: '#8d6e63' },
  },
});

// Desert theme
const desertLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#d4a373' },
    secondary: { main: '#ab6e3d' },
    warning: { main: '#ffb74d' },
    customColor1: { main: '#ff8f00' },
    customColor2: { main: '#5d4037' },
  },
});

const desertDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#d4a373' },
    secondary: { main: '#ab6e3d' },
    warning: { main: '#ffb74d' },
    customColor1: { main: '#ff8f00' },
    customColor2: { main: '#5d4037' },
  },
});

// Forest theme
const forestLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#388e3c' },
    secondary: { main: '#a5d6a7' },
    warning: { main: '#ff9800' },
    customColor1: { main: '#689f38' },
    customColor2: { main: '#33691e' },
  },
});

const forestDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#81c784' },
    secondary: { main: '#388e3c' },
    warning: { main: '#ff9800' },
    customColor1: { main: '#689f38' },
    customColor2: { main: '#33691e' },
  },
});

// Space theme
const spaceLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0d47a1' },
    secondary: { main: '#bbdefb' },
    warning: { main: '#ffab00' },
    customColor1: { main: '#1e88e5' },
    customColor2: { main: '#01579b' },
  },
});

const spaceDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1e88e5' },
    secondary: { main: '#0d47a1' },
    warning: { main: '#ffab00' },
    customColor1: { main: '#1e88e5' },
    customColor2: { main: '#01579b' },
  },
});

export const themes = {
  default: { light: defaultLightTheme, dark: defaultDarkTheme },
  desert: { light: desertLightTheme, dark: desertDarkTheme },
  forest: { light: forestLightTheme, dark: forestDarkTheme },
  space: { light: spaceLightTheme, dark: spaceDarkTheme },
};
