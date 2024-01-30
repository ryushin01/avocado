import SignUpForm from './components/SignUpForm/SignUpForm';
import AccountAside from '../components/AccountAside/AccountAside';

const SignUp = () => {
  return (
    <main className="lg:col-span-6">
      <section className="bg-grayscaleG border border-solid border-grayscaleB rounded-lg lg:px-[60px] lg:py-[100px] lg:min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:min-h-[calc(100vh-200px)]">
          <SignUpForm />
          <AccountAside />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
