import { PageProvider } from '@fs/utils';
import { lazy } from 'react';
import { addTranslationSchema } from 'src/i18nConfig';
import type { AppRouteObject } from 'src/routes/type';

const Settings = lazy(() => import('./components'));

addTranslationSchema('fa', {});
const SettingsRoutes: AppRouteObject = {
  path: '/settings',
  handle: {
    title: 'تنظیمات سامانه',
  },
  element: (
    <PageProvider entityName="settings" httpService={[]}>
      <Settings />
    </PageProvider>
  ),
};

export default SettingsRoutes;
