import HeroSection from './components/HeroSection/HeroSection';
import MainWrapper from './components/MainWrapper/MainWrapper';

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
