import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LoginRoutes = lazy(() => import("src/components/login"));
const HomeRoutes = lazy(() => import("src/pages/Home"));
const NotFoundPage = lazy(() => import("src/common/NotFoundPage/NotFoundPage"));
const ErrorPage = lazy(() => import("src/pages//error.tsx"));

const AppRoutes = () => {
  return (
    <>
      {(() => {
        return (
          <Suspense
            fallback={
              <Box sx={{ height: "100vh" }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                Loading <CircularProgress sx={{ margin: "0px 10px" }} />
              </Box>
            }
          >
            <Routes>
              <Route path="404" element={<NotFoundPage message="404Msg" />} />
              <Route path="403" element={<NotFoundPage message="403Msg" />} />
              <Route path="login/*" element={<LoginRoutes />} />
              <Route path="*" element={<HomeRoutes />} />
            </Routes>
            <Route path="/" element={<></>} errorElement={<ErrorPage />}></Route>
          </Suspense>
        );
      })()}
    </>
  );
};

export default AppRoutes;
