import { useLocation } from 'react-router-dom';

const AccountAside = () => {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:block lg:col-span-1">
      <img
        src={`${
          pathname === '/signup'
            ? '/avocado/images/account/bg_signup.jpg'
            : '/avocado/images/account/bg_signin.jpg'
        }`}
        alt="회원 가입 배경 이미지"
        className="w-full h-full object-cover rounded-lg"
      />
    </aside>
  );
};

export default AccountAside;
