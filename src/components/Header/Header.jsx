import { Link } from 'react-router-dom';
import { ReactComponent as IconMenu } from '../../images/header/icon_menu.svg';

const Header = ({ isOverHero }) => {
  return (
    <header
      className={`fixed top-0 inset-x-0 flex justify-between items-center h-12 lg:h-20 px-5 lg:px-[60px] text-xl lg:text-3xl transition-all duration-500 ease-in-out text-white lg:bg-white lg:rounded-lg lg:overflow-hidden ${
        isOverHero ? 'scrolled' : ''
      }`}
    >
      <Link to="/" className="tracking-[8px]">
        avocado
      </Link>
      <button
        type="button"
        className="flex justify-end items-center w-12 h-12 lg:w-20 lg:h-20"
      >
        <IconMenu className="w-6 h-6 lg:w-10 lg:h-10 lg:fill-black" />
      </button>
    </header>
  );
};

export default Header;
