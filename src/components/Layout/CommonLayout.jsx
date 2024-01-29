import { Outlet, useLocation } from 'react-router-dom';
import CommonHeader from '../../components/Header/CommonHeader';

const CommonLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-1 w-full lg:grid-cols-8">
      <CommonHeader pathname={pathname} />
      <Outlet />
    </div>
  );
};

export default CommonLayout;
