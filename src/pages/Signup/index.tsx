import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { addTranslationSchema } from 'src/i18nConfig';
import authTranslations from './i18n/fa.json';
import { PageProvider } from '@fs/utils';

const SignUp = lazy(() => import('./components'));

const SignUpRoutes = () => {
  addTranslationSchema('fa', authTranslations);

  return (
    <PageProvider entityName="signUp" httpService={[]}>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </PageProvider>
  );
};
export default SignUpRoutes;
