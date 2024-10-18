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
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    error: { main: '#f44336' },
    warning: { main: '#ff9800' },
    info: { main: '#2196f3' },
    success: { main: '#4caf50' },
    customColor1: { main: '#ff5722' },
    customColor2: { main: '#795548' },
  },
});

const defaultDarkTheme = createTheme({
  direction: 'rtl',
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
  direction: 'rtl',
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
  direction: 'rtl',
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
  direction: 'rtl',
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
  direction: 'rtl',
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
  direction: 'rtl',
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
  direction: 'rtl',
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
