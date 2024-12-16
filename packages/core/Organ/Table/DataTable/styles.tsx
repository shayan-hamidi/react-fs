import { SxProps, Theme } from '@mui/material';

export const getStyles = (theme: Theme): SxProps => ({
  '--DataGrid-overlayHeight': '18.75rem',
  '--unstable_DataGrid-radius': '0.75rem',
  '& .MuiDataGrid-footerContainer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2,
  },
  '& .MuiDataGrid-row': {
    color: theme.palette.grey[800] + '!important',
  },
  '& .MuiDataGrid-row:hover': {
    background: 'initial',
  },
  '& .MuiDataGrid-row:nth-of-type(odd)': {
    background: theme.palette.customColorTable?.oddRow,
  },
  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnHeader:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnHeader': {
    border: 'none',
  },
  '&': {
    background: theme.palette.grey[50],
  }
});
