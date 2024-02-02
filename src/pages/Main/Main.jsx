import HeroSection from '@pages/Main/components/HeroSection/HeroSection';
import MainWrapper from '@pages/Main/components/MainWrapper/MainWrapper';

const Main = () => {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-6 w-full">
        <HeroSection />
        <MainWrapper />
      </div>
    </main>
  );
};

export default Main;
