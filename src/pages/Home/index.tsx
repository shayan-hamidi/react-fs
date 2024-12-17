import { PageProvider } from '@fs/utils';
import { addTranslationSchema } from 'src/i18nConfig';
import type { AppRouteObject } from 'src/routes/type';
import HomeLayout from './components';
import homeService from './homeService';
import faTranslations from './i18n/fa.json';
import enTranslations from './i18n/en.json';
import { HomeChildrenRoute } from './subPages';

addTranslationSchema('fa', faTranslations);
addTranslationSchema('en', enTranslations);
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
