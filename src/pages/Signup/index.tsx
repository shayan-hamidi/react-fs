import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { addTranslationSchema } from 'src/i18nConfig';
import authTranslations from './i18n/fa.json';

const SignUp = lazy(() => import('./components'));

const SignUpRoutes = () => {
  addTranslationSchema('fa', authTranslations);
  // const { instance } = getInstance()
  // const counterServices = counterService(instance)

  return (
    // <EntityRoot entityName="counter" httpService={counterServices}>
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
    // </EntityRoot>
  );
};
export default SignUpRoutes;

export const counterMenu: any = [
  {
    path: '/signup',
    intlMessageId: `sidebar.signup`,
    icon: <HomeOutlinedIcon />,
  },
];
