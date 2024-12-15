import { PageProvider } from '@fs/utils';
import { lazy } from 'react';
import { addTranslationSchema } from 'src/i18nConfig';
import type { AppRouteObject } from 'src/routes/type';
import dashboardService from './dashboardServices';

const Dahsboard = lazy(() => import('./components'));

addTranslationSchema('fa', {});
const DashboardRoutes: AppRouteObject = {
  index: true,
  handle: {
    title: 'خانه',
    cumbs: false
  },
  element: (
    <PageProvider entityName="dashboard" httpService={[dashboardService]}>
      <Dahsboard />
    </PageProvider>
  ),
};

export default DashboardRoutes;
