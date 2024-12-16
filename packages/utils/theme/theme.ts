import { Color } from '@mui/material';
import { blueDarkTheme, blueLightTheme } from './templates/blue';
import { brownDarkTheme, brownLightTheme } from './templates/brown';
import { defaultDarkTheme, defaultLightTheme } from './templates/default';
import { greenDarkTheme, greenLightTheme } from './templates/green';
import { purpleDarkTheme, purpleLightTheme } from './templates/purple';
import { yellowDarkTheme, yellowLightTheme } from './templates/yellow';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: Palette['primary'] & {
      gradient?: string;
    };
    customColor2: Palette['primary'];
    customColorTable: Palette['primary'] & {
      oddRow?: string;
    };
  }
  interface PaletteOptions {
    customColor?: PaletteOptions['primary'] & {
      gradient?: string;
    };
    customColor2?: PaletteOptions['primary'];
    customColorTable?: PaletteOptions['primary'] & {
      oddRow?: string;
    };
  }
  interface PaletteColor extends Partial<Color> {}
}

export const themes = {
  default: { light: defaultLightTheme, dark: defaultDarkTheme },
  brown: { light: brownLightTheme, dark: brownDarkTheme },
  green: { light: greenLightTheme, dark: greenDarkTheme },
  yellow: { light: yellowLightTheme, dark: yellowDarkTheme },
  purple: { light: purpleLightTheme, dark: purpleDarkTheme },
  blue: { light: blueLightTheme, dark: blueDarkTheme },
};
