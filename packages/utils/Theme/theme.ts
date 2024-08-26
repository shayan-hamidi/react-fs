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

const fsTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    customColor1: {
      main: '#ff5722',
    },
    customColor2: {
      main: '#795548',
    },
  },
});

export default fsTheme;
