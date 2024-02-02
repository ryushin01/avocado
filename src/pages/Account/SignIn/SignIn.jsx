import { Link } from 'react-router-dom';
import SignInForm from '@pages/Account/SignIn/components/SignInForm/SignInForm';
import AccountAside from '@pages/Account/components/AccountAside/AccountAside';

const SignIn = () => {
  return (
    <main className="signin lg:col-span-6">
      <section className="min-h-screen bg-grayscaleG border border-solid border-grayscaleB rounded-lg lg:px-[60px] lg:py-[100px]">
        <div className="grid grid-cols-1 gap-20 p-5 pb-20 lg:grid-cols-3 lg:gap-20 lg:min-h-[calc(100vh-200px)] lg:p-0">
          <SignInForm />
          <AccountAside />
          <Link
            to="/signup"
            className="col-span-1 text-center tracking-tighter underline lg:col-span-2"
          >
            회원 가입하고 전체 서비스 이용하기
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
