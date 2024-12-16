import { Box, useTheme } from '@mui/material';
import Drawer, { DrawerProps } from './Drawer';

const DrawerContainer = ({ dependency }: DrawerProps) => {
  const theme = useTheme();
  const {
    clicked,
    isUpMd,
    open,
    setClicked,
    drawerHeaderHeight,
    setOpen,
    drawerCloseWidth,
    drawerWidth,
    duration,
  } = dependency;
  return (
    <Box
      sx={{
        display: 'flex',
        [theme.breakpoints.down('md')]: {
          // mobile
          position: 'fixed',
          height: '100%',
          marginInlineStart: open ? '' : `-${drawerWidth}rem`,
          // ---
        },
        transitionDuration: duration,
        flexShrink: 0,
        zIndex: theme.zIndex.drawer,
      }}
    >
      {/* drawer */}
      <Drawer
        dependency={{
          clicked,
          isUpMd,
          open,
          setClicked,
          setOpen,
          drawerCloseWidth,
          drawerHeaderHeight,
          drawerWidth,
          duration,
        }}
      />
    </Box>
  );
};

export default DrawerContainer;
