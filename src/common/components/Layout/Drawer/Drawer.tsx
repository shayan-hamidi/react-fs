import { FsNavigationMenu, menuItems } from '@fs/core';
import { Box, useTheme } from '@mui/material';
import defaultLPatternBg from 'src/assets/images/default-L-drawer-pattern.svg';
import defaultDPatternBg from 'src/assets/images/default-D-drawer-pattern.svg';
import purpleLPatternBg from 'src/assets/images/purple-L-drawer-pattern.svg';
import purpleDPatternBg from 'src/assets/images/purple-D-drawer-pattern.svg';
import blueLPatternBg from 'src/assets/images/blue-L-drawer-pattern.svg';
import blueDPatternBg from 'src/assets/images/blue-D-drawer-pattern.svg';
import greenLPatternBg from 'src/assets/images/green-L-drawer-pattern.svg';
import greenDPatternBg from 'src/assets/images/green-D-drawer-pattern.svg';
import brownLPatternBg from 'src/assets/images/brown-L-drawer-pattern.svg';
import brownDPatternBg from 'src/assets/images/brown-D-drawer-pattern.svg';
import yellowLPatternBg from 'src/assets/images/yellow-L-drawer-pattern.svg';
import yellowDPatternBg from 'src/assets/images/yellow-D-drawer-pattern.svg';
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
  const { mode, themeTemplate } = useFsTheme();
  const getDrawerPattern = () => {
    if (mode === 'light') {
      switch (themeTemplate) {
        case 'default':
          return defaultLPatternBg;
        case 'blue':
          return blueLPatternBg;
        case 'brown':
          return brownLPatternBg;
        case 'green':
          return greenLPatternBg;
        case 'purple':
          return purpleLPatternBg;
        case 'yellow':
          return yellowLPatternBg;
        default:
          return defaultLPatternBg;
      }
    } else {
      switch (themeTemplate) {
        case 'default':
          return defaultDPatternBg;
        case 'blue':
          return blueDPatternBg;
        case 'brown':
          return brownDPatternBg;
        case 'green':
          return greenDPatternBg;
        case 'purple':
          return purpleDPatternBg;
        case 'yellow':
          return yellowDPatternBg;
        default:
          return defaultDPatternBg;
      }
    }
  };
  return (
    <Box
      onMouseEnter={() => isUpMd && setOpen(true)}
      onMouseLeave={() => isUpMd && !clicked && setOpen(false)}
      sx={{
        background: `${theme.palette.grey[50]} url(${getDrawerPattern()})`,
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
