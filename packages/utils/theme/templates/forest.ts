import { createTheme } from '@mui/material';
import { defaultStyleComponents } from "./defaultStyleComponents";

export const forestLightTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#2E8B57',
      '50': '#E6F4EA',
      '100': '#C1E8D5',
      '200': '#97DDBA',
      '300': '#6EC19E',
      '400': '#45B483',
      '500': '#2E8B57',
      '600': '#287346',
      '700': '#225E35',
      '800': '#1B4824',
      '900': '#153113',
    },
    secondary: {
      main: '#66CDAA',
      '50': '#E0F8F3',
      '100': '#B3EDE5',
      '200': '#80E0D3',
      '300': '#4DDED0',
      '400': '#26D7C5',
      '500': '#00D0BA',
      '600': '#00B3A4',
      '700': '#00938E',
      '800': '#007578',
      '900': '#005762',
    },
    grey: {
      '900': '#1A1A1A',
      '800': '#333333',
      '700': '#4D4D4D',
      '600': '#666666',
      '500': '#808080',
      '400': '#999999',
      '300': '#B3B3B3',
      '200': '#CCCCCC',
      '100': '#E6E6E6',
      '50': '#FFFFFF',
    },
    error: {
      main: '#D32F2F',
      '900': '#B71C1C',
      '800': '#C62828',
      '700': '#D32F2F',
      '600': '#E53935',
      '500': '#F44336',
      '400': '#EF5350',
      '300': '#E57373',
      '200': '#EF9A9A',
      '100': '#FFCDD2',
    },
    warning: {
      main: '#FFA000',
      '900': '#FF8F00',
      '800': '#FF9100',
      '700': '#FF9800',
      '600': '#FFB300',
      '500': '#FFC107',
      '400': '#FFD54F',
      '300': '#FFECB3',
      '200': '#FFF8E1',
      '100': '#FFF3E0',
    },
    info: {
      main: '#0288D1',
      '900': '#01579B',
      '800': '#0277BD',
      '700': '#039BE5',
      '600': '#03A9F4',
      '500': '#3EB3FF',
      '400': '#69C4FF',
      '300': '#95D5FF',
      '200': '#EBF7FF',
      '100': '#EBF7FF',
      '50': '#FFFFFF',
    },
    success: {
      main: '#43A047',
      '900': '#1B5E20',
      '800': '#2E7D32',
      '700': '#388E3C',
      '600': '#43A047',
      '500': '#4CAF50',
      '400': '#66BB6A',
      '300': '#81C784',
      '200': '#A5D6A7',
      '100': '#C8E6C9',
    },
    customColor: {
      main: '#228B22',
      100: '#2E8B57',
      gradient:
        'linear-gradient(90deg, rgba(34, 139, 34, 0.5) 0%, rgba(102, 205, 170, 0.7) 100%)',
    },
    customColor2: {
      main: '#66CDAA',
    },
    customColorTable: {
      main: '#2E8B57',
      oddRow: '#66CDAA1A',
    },
  },
});

export const forestDarkTheme = createTheme({
  components: { ...defaultStyleComponents },
  spacing: (abs: number) => `${0.35 * abs}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1B5E20',
      '50': '#0D2E0A',
      '100': '#144E14',
      '200': '#1A6E1A',
      '300': '#207F20',
      '400': '#299029',
      '500': '#33A133',
      '600': '#2D8B2D',
      '700': '#277927',
      '800': '#216B21',
      '900': '#1B5E20',
    },
    secondary: {
      main: '#008B8B',
      '50': '#004D4D',
      '100': '#006666',
      '200': '#007777',
      '300': '#008888',
      '400': '#009999',
      '500': '#00AAAA',
      '600': '#00B2B2',
      '700': '#00CCCC',
      '800': '#00D6D6',
      '900': '#00E0E0',
    },
    grey: {
      '900': '#FFFFFF',
      '800': '#F0F0F0',
      '700': '#E0E0E0',
      '600': '#C0C0C0',
      '500': '#A0A0A0',
      '400': '#808080',
      '300': '#606060',
      '200': '#404040',
      '100': '#202020',
      '50': '#000000',
    },
    error: {
      main: '#EF5350',
      '900': '#D32F2F',
      '800': '#C62828',
      '700': '#B71C1C',
      '600': '#FF3E52',
      '500': '#FF6979',
      '400': '#FF95A0',
      '300': '#FFC0C7',
      '200': '#FFEBED',
      '100': '#FFEBED',
    },
    warning: {
      main: '#FFB639',
      '900': '#FF8F00',
      '800': '#FF9100',
      '700': '#FF9800',
      '600': '#FFB300',
      '500': '#FFA100',
      '400': '#FFB639',
      '300': '#FFCB73',
      '200': '#FFE0AC',
      '100': '#FFF5E5',
    },
    info: {
      main: '#0288D1',
      '900': '#01579B',
      '800': '#0277BD',
      '700': '#039BE5',
      '600': '#03A9F4',
      '500': '#3EB3FF',
      '400': '#69C4FF',
      '300': '#95D5FF',
      '200': '#EBF7FF',
      '100': '#EBF7FF',
    },
    success: {
      main: '#43A047',
      '900': '#1B5E20',
      '800': '#2E7D32',
      '700': '#388E3C',
      '600': '#43A047',
      '500': '#4CAF50',
      '400': '#66BB6A',
      '300': '#81C784',
      '200': '#A5D6A7',
      '100': '#C8E6C9',
    },
    customColor: {
      main: '#006400',
      100: '#228B22',
      gradient:
        'linear-gradient(90deg, rgba(0, 100, 0, 0.5) 0%, rgba(102, 205, 170, 0.7) 100%)',
    },
    customColor2: {
      main: '#66CDAA',
    },
    customColorTable: {
      main: '#006400',
      oddRow: '#008B8B1A',
    },
  },
});
