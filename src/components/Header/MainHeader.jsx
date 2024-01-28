import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { ReactComponent as IconMenu } from '../../images/common/icon_menu.svg';

const Header = ({ isOverHero }) => {
  const [toggleSideNav, setToggleSideNav] = useState(false);

  const handleSideNav = () => {
    setToggleSideNav(prev => !prev);
  };

  useEffect(() => {
    if (toggleSideNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [toggleSideNav]);

  return (
    <header
      className={`fixed z-30 top-0 inset-x-0 flex justify-between items-center  h-12 lg:h-20 px-5 lg:px-0 text-xl lg:text-3xl transition-all duration-500 ease-in-out text-grayscaleG lg:rounded-lg after:content-[''] after:absolute after:top-0 after:inset-x-0 after:h-0 after:bg-grayscaleG after:transition-all after:duration-300 ${
        isOverHero ? 'scrolled' : ''
      }`}
    >
      <div className="grid grid-cols-2 lg:grid-cols-6 w-full">
        <h1 className="flex items-center lg:pl-[60px] lg:col-span-2">
          <Link to="/" className="relative z-20 tracking-[8px]">
            avocado
          </Link>
        </h1>

        <div className="lg:col-span-4 flex justify-end lg:bg-grayscaleG lg:rounded-lg lg:pr-[60px] lg:border lg:border-solid lg:border-grayscaleB">
          <button
            type="button"
            onClick={handleSideNav}
            className="relative z-20 flex justify-end items-center w-12 h-12 lg:w-20 lg:h-20"
          >
            <IconMenu className="w-6 h-6 lg:w-10 lg:h-10 lg:fill-grayscaleA" />
          </button>
          {toggleSideNav && (
            <Nav toggleSideNav={toggleSideNav} handleSideNav={handleSideNav} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
