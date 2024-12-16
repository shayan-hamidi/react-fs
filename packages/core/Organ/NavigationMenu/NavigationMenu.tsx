import {
  HomeOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FsTypography } from '../../Atom';
import {
  MenuItemDTO,
  MenuItemProps,
  MenuItemsDTO,
  NavigationMenuProps,
} from './type';

export const menuItems: MenuItemsDTO[] = [
  {
    label: 'نام دسته بندی ها',
    items: [
      {
        id: 4,
        title: 'خانه',
        icon: HomeOutlined,
      },
      {
        id: 1,
        title: 'تنظیمات',
        icon: SettingsOutlined,
        children: [
          {
            id: 2,
            title: 'کامپوننت ها',
            route: '/ui-component',
            children: undefined,
            disabled: import.meta.env.MODE !== 'development',
          },
          {
            id: 3,
            title: 'تنظیمات سیستم',
            route: '/settings',
            children: undefined,
          },
        ],
      },
    ],
  },
];

const findActiveMenuPath = (
  items: MenuItemDTO[],
  currentPath: string
): number[] => {
  for (const item of items) {
    if (currentPath.includes(item.route || '-1')) {
      return [item.id];
    }
    if (item.children) {
      const childPath = findActiveMenuPath(item.children, currentPath);
      if (childPath.length) {
        return [item.id, ...childPath];
      }
    }
  }
  return [];
};

const MenuItem = ({
  menuItem,
  parentMenuItem,
  drawerOpen = false,
  level = 0,
  dependency,
  isLastChild,
  ...rest
}: MenuItemProps & ListItemButtonProps) => {
  const { toggleMenu, checkIsActiveMenu, checkIsActiveRoute } = dependency;
  const navigateTo = useNavigate();
  const theme = useTheme();
  const handleClick = () => {
    toggleMenu(menuItem.id, level);
    if (!menuItem.children) {
      navigateTo(menuItem?.route ?? '/');
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {parentMenuItem && (
          <>
            {/* line vertical */}
            <Box
              sx={{
                position: 'absolute',
                height: isLastChild ? '60%' : '110%',
                left: '0',
                top: '-10%',
                borderInlineStart: `0.06rem dashed ${theme.palette.grey[400]}`,
              }}
            />
            {/* line horizontal */}
            <Box
              sx={{
                height: '.1rem',
                borderBottom: `0.06rem dashed ${theme.palette.grey[400]}`,
                width: '1.25rem',
              }}
            />
            {/* dot */}
            <Box
              sx={{
                height: '.2rem',
                background: theme.palette.grey[400],
                borderRadius: '100%',
                width: '.2rem',
                marginInlineStart: 0.7,
              }}
            />
          </>
        )}
        <ListItemButton
          selected={checkIsActiveRoute(menuItem)}
          onClick={handleClick}
          sx={({ palette }) => ({
            borderRadius: 1,
            border: `1px solid transparent`,
            '&.Mui-selected': {
              borderColor: palette.primary[800],
            },
          })}
          {...rest}
        >
          {menuItem.icon && (
            <ListItemIcon
              sx={{
                color: checkIsActiveRoute(menuItem)
                  ? theme.palette.primary['800']
                  : theme.palette.grey['800'],
                minWidth: '0',
                fontSize: '1.25rem',
                marginInlineEnd: 1,
                mx: !drawerOpen ? 'auto' : '',
              }}
            >
              <menuItem.icon fontSize="inherit" />
            </ListItemIcon>
          )}
          {drawerOpen && (
            <ListItemText
              sx={{
                color: checkIsActiveRoute(menuItem)
                  ? theme.palette.primary['800']
                  : theme.palette.grey['800'],
              }}
            >
              {menuItem?.title}
            </ListItemText>
          )}
          {menuItem.children &&
            drawerOpen &&
            (checkIsActiveMenu(menuItem.id, level) ? (
              <KeyboardArrowUp
                sx={{
                  color: checkIsActiveRoute(menuItem)
                    ? theme.palette.primary['800']
                    : theme.palette.grey['800'],
                }}
                fontSize={'inherit'}
              />
            ) : (
              <KeyboardArrowDown
                sx={{
                  color: checkIsActiveRoute(menuItem)
                    ? theme.palette.primary['800']
                    : theme.palette.grey['800'],
                }}
                fontSize={'inherit'}
              />
            ))}
        </ListItemButton>
      </Box>
      {menuItem.children && drawerOpen && (
        <Collapse
          in={checkIsActiveMenu(menuItem.id, level)}
          timeout="auto"
          unmountOnExit
        >
          <List
            dense
            sx={{
              marginInlineStart: 4.5,
            }}
          >
            {menuItem.children?.map((child, index) => (
              <MenuItem
                {...rest}
                key={child.id}
                drawerOpen={drawerOpen}
                dependency={{ ...dependency }}
                menuItem={child}
                level={level + 1}
                isLastChild={index === Number(menuItem.children?.length) - 1}
                parentMenuItem={menuItem}
                disabled={child.disabled}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const NavigationMenu = ({
  menuItems,
  drawerOpen = false,
}: NavigationMenuProps) => {
  const { palette } = useTheme();
  const location = useLocation();
  const [activeMenus, setActiveMenus] = useState<{ [key: number]: number }>(
    () => {
      const activeMenus: { [key: number]: number } = {};
      menuItems.forEach((category) => {
        const activePath = findActiveMenuPath(
          category.items,
          location.pathname
        );
        activePath.forEach((id, index) => {
          activeMenus[index] = id;
        });
      });
      return activeMenus;
    }
  );
  const toggleMenu = (itemId: number, level: number) => {
    setActiveMenus((prev) => {
      const newOpenMenus = { ...prev };

      // اگر منو قبلاً باز بود، بسته می‌شود
      if (newOpenMenus[level] === itemId) {
        // حذف تمام منوهای سطوح پایین‌تر
        Object.keys(newOpenMenus).forEach((key) => {
          if (parseInt(key) >= level) {
            delete newOpenMenus[+key];
          }
        });
      } else {
        // باز کردن منوی جدید و بستن منوی قبلی در همان سطح
        // و حذف تمام منوهای سطوح پایین‌تر
        Object.keys(newOpenMenus).forEach((key) => {
          if (parseInt(key) >= level) {
            delete newOpenMenus[+key];
          }
        });
        newOpenMenus[level] = itemId;
      }

      return newOpenMenus;
    });
  };
  const checkIsActiveRoute = (item: MenuItemDTO): boolean => {
    return location.pathname.includes(item.route || '-1');
  };
  const checkIsActiveMenu = (id: number, level: number) =>
    activeMenus[level] === id;

  return (
    <Box sx={{ px: drawerOpen ? 2 : 5 }}>
      {menuItems.map((menu, index) => (
        <Box mb={5} key={index}>
          <FsTypography
            sx={{
              display: drawerOpen ? 'block' : 'none',
              color: palette.grey[600],
              marginInlineStart: 2,
            }}
            fontSize={'0.75rem'}
            i18nKey={menu.label}
          />
          {menu.items.map((item, index) => (
            <Box key={index}>
              <List dense>
                <MenuItem
                  drawerOpen={drawerOpen}
                  key={item.id}
                  dependency={{
                    toggleMenu,
                    checkIsActiveMenu,
                    checkIsActiveRoute,
                  }}
                  level={0}
                  menuItem={item}
                  isLastChild={index === menu.items.length - 1}
                  parentMenuItem={undefined}
                />
              </List>
              {menu.items.length !== index + 1 && <Divider />}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default NavigationMenu;
