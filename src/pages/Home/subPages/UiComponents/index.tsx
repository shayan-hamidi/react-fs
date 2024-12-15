import { PageProvider } from '@fs/utils';
import { lazy } from 'react';
import { addTranslationSchema } from 'src/i18nConfig';
import type { AppRouteObject } from 'src/routes/type';
import uiComponentsService from './uiComponentsService';

const UiComponents = lazy(() => import('./components'));

addTranslationSchema('fa', {});
const UiComponentsRoutes: AppRouteObject = {
  path: '/ui-component',
  handle: {
    title: 'جعبه ابزار',
  },
  element: (
    <PageProvider entityName="home" httpService={[uiComponentsService]}>
      <UiComponents />
    </PageProvider>
  ),
};

export default UiComponentsRoutes;
