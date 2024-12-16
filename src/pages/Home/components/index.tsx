import { Outlet } from 'react-router-dom';
import WrapperLayout from 'src/common/components/Layout/Wrapper';

const HomeLayout = () => {
  return (
    <WrapperLayout>
      <Outlet />
    </WrapperLayout>
  );
};

export default HomeLayout;
