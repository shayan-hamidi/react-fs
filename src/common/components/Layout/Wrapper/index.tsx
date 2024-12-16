import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { PropsWithChildren, Suspense, useState } from 'react';
import { Footer } from 'src/common/components/Layout';
import PageInfoContext from 'src/common/contexts/PageInfoContext';
import DrawerContainer from '../Drawer';
import Loading from '../Loading';
import Toolbar from '../Toolbar';
import { CustomBoxScroll } from '../CustomScrollBox';
import MainHeader from '../MainHeader';

const drawerWidth = 17.5;
const drawerCloseWidth = 8.2;
const drawerHeaderHeight = 4;
const duration = '.3s';

export default function WrapperLayout({ children }: PropsWithChildren) {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(isUpMd);
  const [clicked, setClicked] = useState(true);

  const handleDrawerOpen = () => {
    setClicked((e) => !e);
    setOpen((e) => !e);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* Layout */}
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <DrawerContainer
          dependency={{
            clicked,
            drawerCloseWidth,
            drawerHeaderHeight,
            drawerWidth,
            duration,
            isUpMd,
            open,
            setClicked,
            setOpen,
          }}
        />
        {/* main Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflow: 'hidden',
          }}
        >
          <Toolbar
            dependency={{ drawerHeaderHeight, handleDrawerOpen, open }}
          />

          {/* main */}
          <CustomBoxScroll
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              p: theme.spacing(5),
              background: theme.palette.primary[50],
              position: 'relative',
            }}
          >
            <Suspense fallback={<Loading />}>
              <PageInfoContext>
                <MainHeader />
                {children}
              </PageInfoContext>
            </Suspense>
          </CustomBoxScroll>
        </Box>
      </Box>
      <Footer />
      {/* overlay */}
      <Box
        onClick={() => setOpen(false)}
        sx={{
          background: `${theme.palette.grey[900]}`,
          opacity: 0.5,
          display: open && !isUpMd ? 'block' : 'none',
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 0,
          cursor: 'pointer',
        }}
      />
    </Box>
  );
}
