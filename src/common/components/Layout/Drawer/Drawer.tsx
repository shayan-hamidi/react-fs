import { FsNavigationMenu, menuItems } from '@fs/core';
import { Box, useTheme } from '@mui/material';
import DrawerBg from 'src/assets/images/drawer-bg.png';
import logo from 'src/assets/images/logo.png';
import { useFsTheme } from '@fs/utils';
import { CustomBoxScroll } from '../CustomScrollBox';

export interface DrawerProps {
  dependency: {
    isUpMd: boolean;
    duration: string;
    drawerCloseWidth: number;
    drawerWidth: number;
    drawerHeaderHeight: number;
    open: boolean;
    clicked: boolean;
    setOpen: (v: boolean) => void;
    setClicked: (v: boolean) => void;
  };
}

const Drawer = ({ dependency }: DrawerProps) => {
  const {
    clicked,
    isUpMd,
    open,
    drawerHeaderHeight,
    setOpen,
    drawerCloseWidth,
    drawerWidth,
    duration,
  } = dependency;
  const theme = useTheme();
  const { mode } = useFsTheme();

  return (
    <Box
      onMouseEnter={() => isUpMd && setOpen(true)}
      onMouseLeave={() => isUpMd && !clicked && setOpen(false)}
      sx={{
        background: `${theme.palette.grey[50]} url(${DrawerBg})`,
        backgroundSize: '9.5rem 10.125rem;',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        transition: `width ${duration} ease-in-out`,
        borderInlineEnd: `0.06rem solid ${theme.palette.grey[200]}`,
        width: isUpMd
          ? open
            ? `${drawerWidth}rem`
            : `${drawerCloseWidth}rem`
          : `${drawerWidth}rem`,
      }}
    >
      {/* header */}
      <Box
        sx={{
          height: `${drawerHeaderHeight}rem`,
          p: theme.spacing(2),
          display: 'flex',
          alignItems: 'center',
          borderBottom: `0.06rem solid ${theme.palette.grey[200]}`,
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ filter: mode === 'dark' ? 'invert(1)' : undefined }}
          width={'20%'}
        />
      </Box>
      {/* navigationItems */}
      <CustomBoxScroll
        sx={{
          flexGrow: 1,
          p: theme.spacing(2),
          overflowY: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        <FsNavigationMenu drawerOpen={open} menuItems={menuItems} />
      </CustomBoxScroll>
    </Box>
  );
};

export default Drawer;
