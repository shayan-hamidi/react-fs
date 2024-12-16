import { Box, styled } from '@mui/material';

export const CustomBoxScroll = styled(Box)(({ theme }) => ({
  '&::-webkit-scrollbar': {
    width: '0.25rem',
    height: 0,
  },

  '&::-webkit-scrollbar-track': {
    background: theme.palette.grey[200],
    borderRadius: '0.25rem',
  },

  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: '0.25rem',
    '&:hover': {
      background: theme.palette.primary[700],
    },
  },
}));
