import { RouterProvider } from 'react-router-dom';
import routes from './routes';


const AppRoutes = () => {
  return (
    <>
      {(() => {
        return (
          <RouterProvider router={routes} />
        );
      })()}
    </>
  );
};

export default AppRoutes;
