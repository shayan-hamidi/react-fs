import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { addTranslationSchema } from 'src/i18nConfig';
import authTranslations from './i18n/fa.json';
import { PageProvider } from '@fs/utils';

const Home = lazy(() => import('./components'));

const HomeRoutes = () => {
  addTranslationSchema('fa', authTranslations);
  // const { instance } = getInstance()
  // const counterServices = counterService(instance)
  return (
    <PageProvider entityName="home" httpService={[]}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PageProvider>
  );
};

export default HomeRoutes;

export const counterMenu: any = [
  {
    path: '/login',
    intlMessageId: `sidebar.counter`,
    icon: <HomeOutlinedIcon />,
  },
];
