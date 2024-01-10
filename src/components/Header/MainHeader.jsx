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
      className={`fixed top-0 inset-x-0 flex justify-between items-center h-12 lg:h-20 px-5 lg:px-[60px] text-xl lg:text-3xl transition-all duration-500 ease-in-out text-grayscaleG lg:bg-grayscaleG lg:rounded-lg lg:overflow-hidden after:content-[''] after:absolute after:top-0 after:inset-x-0 after:h-0 after:bg-grayscaleG after:transition-all after:duration-300 ${
        isOverHero ? 'scrolled' : ''
      }`}
    >
      <Link to="/" className="relative z-20 tracking-[8px]">
        avocado
      </Link>
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
    </header>
  );
};

export default Header;
