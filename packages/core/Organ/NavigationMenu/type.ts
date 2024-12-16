import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface MenuItemDTO {
  id: number;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  isOpen?: boolean;
  title: string;
  route?: string;
  children?: MenuItemDTO[];
  disabled?: boolean;
  permissions?: string[],
}
export interface MenuItemsDTO {
  label: string;
  items: MenuItemDTO[];
}
export interface MenuItemProps {
  menuItem: MenuItemDTO;
  parentMenuItem?: MenuItemDTO;
  level: number;
  drawerOpen?: boolean;
  isLastChild?: boolean;
  dependency: {
    toggleMenu: (id: number, level: number) => void;
    checkIsActiveMenu: (id: number, level: number) => boolean;
    checkIsActiveRoute: (menuItem: MenuItemDTO) => boolean;
    checkPermissionChildren?: (children?: MenuItemDTO[]) => boolean;
    hasPermission?: (permissions?: string[]) => boolean;
  };
}
export interface NavigationMenuProps {
  menuItems: MenuItemsDTO[];
  drawerOpen?: boolean;
}
