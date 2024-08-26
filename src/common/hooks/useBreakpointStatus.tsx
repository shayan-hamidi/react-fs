import { useMediaQuery, useTheme } from '@mui/material';

const useBreakpointStatus = () => {
  const theme = useTheme();

  const isExtraSmall = useMediaQuery(theme.breakpoints.only('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.only('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isLarge = useMediaQuery(theme.breakpoints.only('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.only('xl'));

  return { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge };
};

export default useBreakpointStatus;
