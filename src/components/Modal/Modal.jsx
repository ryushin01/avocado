import { ReactComponent as IconClose } from '../../images/common/icon_close.svg';

const Modal = ({ modalOpen, data, onClose }) => {
  return (
    <section
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-0 h-0 animate-spread overflow-y-auto ${
        modalOpen ? 'open' : ''
      }`}
    >
      <div
        className="relative z-20 inset-0 bg-grayscaleB/50"
        onClick={onClose}
      />
      <div className="relative z-30 inset-0 bg-grayscaleB">
        <div className="sticky z-10 top-0 flex justify-end items-center px-5 lg:px-[60px] bg-grayscaleG rounded-b-lg border-b border-solid border-grayscaleB">
          <button
            type="button"
            className="flex justify-end items-center w-12 h-12 lg:w-20 lg:h-20"
            onClick={onClose}
          >
            <IconClose className="w-6 h-6 lg:w-10 lg:h-10" />
          </button>
        </div>
        <div className="rounded-lg bg-grayscaleG">{data}</div>
      </div>
    </section>
  );
};

export default Modal;
