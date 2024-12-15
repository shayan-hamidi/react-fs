import { PageProvider } from '@fs/utils';
import { addTranslationSchema } from 'src/i18nConfig';
import type { AppRouteObject } from 'src/routes/type';
import HomeLayout from './components';
import homeService from './homeService';
import authTranslations from './i18n/fa.json';
import { HomeChildrenRoute } from './subPages';
import { FsUserPermissionContextProvider } from 'src/common/contexts/UserPermissionContext';

addTranslationSchema('fa', authTranslations);
const HomeRoutes: AppRouteObject = {
  path: '/',
  handle: {
    title: 'صفحه اصلی',
  },
  element: (
    <FsUserPermissionContextProvider>
      <PageProvider entityName="home" httpService={[homeService]}>
        <HomeLayout />
      </PageProvider>
    </FsUserPermissionContextProvider>
  ),
  children: [...HomeChildrenRoute],
};

export default HomeRoutes;
