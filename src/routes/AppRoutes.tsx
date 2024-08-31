import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpRoutes = lazy(() => import('src/pages/Signup'));
const LoginRoutes = lazy(() => import('src/pages/Login'));
const HomeRoutes = lazy(() => import('src/pages/Home'));
const NotFoundPage = lazy(() => import('src/common/components/NotFoundPage'));
const ErrorPage = lazy(() => import('src/pages/error.tsx'));
const Loading = lazy(() => import('src/common/components/Loading'));

const AppRoutes = () => {
  return (
    <>
      {(() => {
        return (
          <Suspense
            fallback={
              <Box
                sx={{ height: '100vh' }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Loading />
              </Box>
            }
          >
            <Routes>
              <Route path="404" element={<NotFoundPage message="404Msg" />} />
              <Route path="403" element={<NotFoundPage message="403Msg" />} />
              <Route path="login/*" element={<LoginRoutes />} />
              <Route path="signUp/*" element={<SignUpRoutes />} />
              <Route path="*" element={<HomeRoutes />} />
            </Routes>
            <Routes>
              <Route
                path="/"
                element={<></>}
                errorElement={<ErrorPage />}
              ></Route>
            </Routes>
          </Suspense>
        );
      })()}
    </>
  );
};

export default AppRoutes;
