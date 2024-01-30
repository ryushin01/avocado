import SignUpForm from './components/SignUpForm/SignUpForm';
import AccountAside from '../components/AccountAside/AccountAside';

const SignUp = () => {
  return (
    <main className="lg:col-span-6">
      <section className="bg-grayscaleG border border-solid border-grayscaleB rounded-lg lg:px-[60px] lg:py-[100px] min-h-screen">
        <div className="grid grid-cols-1 gap-20 p-5 pb-20 lg:grid-cols-3 lg:gap-20 lg:min-h-[calc(100vh-200px)] lg:p-0">
          <SignUpForm />
          <AccountAside />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
