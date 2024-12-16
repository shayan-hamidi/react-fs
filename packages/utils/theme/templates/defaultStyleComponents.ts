import type { Components } from '@mui/material';

export const defaultStyleComponents: Components = {
  MuiButton: {
    styleOverrides: {
      sizeLarge: {
        height: '2.625rem',
      },
      sizeMedium: {
        height: '2.25rem',
      },
      sizeSmall: {
        height: '1.91rem',
      },
      contained: {
        boxShadow: 'none',
        ':hover': {
          boxShadow: 'none',
        },
      },
      containedWarning: {
        color: '#FFFFFF',
      },
      containedSuccess: {
        ':hover': {
          background: '#00722E',
        },
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiInputLabel: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiInput: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiChip: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      colorSuccess: {
        background: '#C0FFD9',
        color: '#00722E',
      },
      colorError: {
        background: '#FFC0C7',
        color: '#A50011',
      },
      colorWarning: {
        background: '#FFF5E5',
        color: '#CC8100',
      },
      colorSecondary: {
        background: '#e2e2e2',
        color: '#535353',
      },
    },
  },
};
