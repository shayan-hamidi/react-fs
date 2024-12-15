import { Outlet } from 'react-router-dom';
import WrapperLayout from 'src/common/components/Layout/Wrapper';
import { useEffect } from 'react';
import { useUserInfo } from 'src/common/contexts/UserInfoContext';

const HomeLayout = () => {
  const { refreshUserInfo } = useUserInfo();
  useEffect(() => {
    refreshUserInfo();
  }, []);
  return (
    <WrapperLayout>
      <Outlet />
    </WrapperLayout>
  );
};

export default HomeLayout;
