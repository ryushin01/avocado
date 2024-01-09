import { ReactComponent as IconTop } from '../../images/common/icon_top.svg';

const TopButton = ({ isTopButton }) => {
  const goToTop = () => {
    window.scroll({
      top: 0,
    });
  };

  return (
    <button
      type="button"
      onClick={goToTop}
      className={`btn-top fixed bottom-10 lg:bottom-[60px] right-5 lg:right-[60px] w-9 h-9 border border-solid border-grayscaleB bg-grayscaleG opacity-0 translate-y-5 transition-all duration-300 ${
        isTopButton ? 'scrolled' : ''
      }`}
    >
      <IconTop />
    </button>
  );
};

export default TopButton;
