import { PageProvider } from '@fs/utils';
import { addTranslationSchema } from 'src/i18nConfig';
import type { AppRouteObject } from 'src/routes/type';
import HomeLayout from './components';
import homeService from './homeService';
import authTranslations from './i18n/fa.json';
import { HomeChildrenRoute } from './subPages';

addTranslationSchema('fa', authTranslations);
const HomeRoutes: AppRouteObject = {
  path: '/',
  handle: {
    title: 'صفحه اصلی',
  },
  element: (
    <PageProvider entityName="home" httpService={[homeService]}>
      <HomeLayout />
    </PageProvider>
  ),
  children: [...HomeChildrenRoute],
};

export default HomeRoutes;
