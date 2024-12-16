import type { RouteObject } from 'react-router-dom';

export interface RouteHandle {
  title?: string;
  icon?: string;
  cumbs?: boolean; // * show breadcrumbs or not: default true
  cumbsOptions?: {
    isReadonly?: boolean;
  };
  permissions?: string[];
  backTo?: boolean | string; // * disabled or enter your route: default true
  backToOptions?: {
    indexed?: boolean; // * indexed for children or not: default true
  };
}

export type AppRouteObject = Omit<RouteObject, 'handle' | 'children'> & {
  handle?: RouteHandle;
  children?: AppRouteObject[];
};
