import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomeRoutes from 'src/pages/Home';
import type { AppRouteObject } from './type';

const NotFoundPage = lazy(() => import('src/common/components/NotFoundPage'));
const LoginRoutes = lazy(() => import('src/pages/Login'));

export const routes: AppRouteObject[] = [
  HomeRoutes,
  {
    path: '/login',
    element: <LoginRoutes />,
  },
  {
    path: '/404',
    element: <NotFoundPage message="404Msg" />,
  },
  {
    path: '/403',
    element: <NotFoundPage message="403Msg" />,
  },
];

export default createBrowserRouter(routes as RouteObject[], {
  basename: import.meta.env.BASE_URL,
});
