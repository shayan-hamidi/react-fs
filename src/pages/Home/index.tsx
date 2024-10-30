import { PageProvider } from '@fs/utils';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { addTranslationSchema } from 'src/i18nConfig';
import authTranslations from './i18n/fa.json';

const Home = lazy(() => import('./components'));

const HomeRoutes = () => {
  addTranslationSchema('fa', authTranslations);
  return (
    <PageProvider entityName="home" httpService={[]}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PageProvider>
  );
};

export default HomeRoutes;
