import { FsButton, FsIconButton } from '@fs/core';
import {
  ExitToApp,
  KeyboardArrowDown,
  MenuOpen,
  Notifications,
  Person,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ToolbarProps {
  dependency: {
    drawerHeaderHeight: number;
    handleDrawerOpen: () => void;
    open: boolean;
  };
}

const Toolbar = ({ dependency }: ToolbarProps) => {
  const { drawerHeaderHeight, handleDrawerOpen, open } = dependency;
  const theme = useTheme();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchor);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };
  const logout = () => {
    navigate('/login');
  };
  return (
    <Box
      sx={{
        height: `${drawerHeaderHeight}rem`,
        background: `${theme.palette.grey[50]}`,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        borderBottom: `0.06rem solid ${theme.palette.grey[200]}`,
        px: theme.spacing(3),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          color="secondary"
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
          ]}
        >
          {open ? <MenuOpen /> : <MenuIcon />}
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FsIconButton color="inherit" size="small" disabled>
            <Notifications fontSize={'small'} />
          </FsIconButton>
          <Divider flexItem />
          <FsButton
            id="user-Menu-button"
            color="secondary"
            size="small"
            startIcon={<Person />}
            endIcon={<KeyboardArrowDown />}
            onClick={handleClick}
            i18nKey={`نام یوزر`}
          />
          <Menu
            id="user-menu"
            anchorEl={menuAnchor}
            open={menuOpen}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'user-Menu-button',
              style: {
                minWidth: '8rem',
                padding: '0.3rem 0rem',
              },
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {/* خروج */}
            <MenuItem dense onClick={logout}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="خروج" />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Toolbar;
