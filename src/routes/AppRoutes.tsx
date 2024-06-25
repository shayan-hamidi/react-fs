import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "src/common/NotFoundPage/NotFoundPage";
import HomeRoutes from "src/pages/Home";
import LoginRoutes from "src/pages/Login";

const AppRoutes = () => {
  return (
    // <ErrorBoundary onError={onError}>
    <>
      {(() => {
        return (
          <>
            <Suspense fallback={<CircularProgress />}>
              <Routes>
                <Route path="404" element={<NotFoundPage message="404Msg" />} />
                <Route path="403" element={<NotFoundPage message="403Msg" />} />
                <Route path="login/*" element={<LoginRoutes />} />
                <Route path="*" element={<HomeRoutes />} />
              </Routes>
            </Suspense>
          </>
        );
      })()}
    </>
    // </ErrorBoundary>
  );
};

export default AppRoutes;
