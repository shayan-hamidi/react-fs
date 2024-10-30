import { PageProvider } from '@fs/utils';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { addTranslationSchema } from 'src/i18nConfig';
import loginTranslations from './i18n/fa.json';
import loginService from './loginService';

const Login = lazy(() => import('./components'));

const LoginRoutes = () => {
  addTranslationSchema('fa', loginTranslations);

  return (
    <PageProvider entityName="login" httpService={[loginService]}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </PageProvider>
  );
};
export default LoginRoutes;
