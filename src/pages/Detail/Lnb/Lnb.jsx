import { useNavigate } from 'react-router-dom';

const Lnb = ({ name, englishName }) => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <section className="sticky top-0 z-20 w-full rounded-t-0 rounded-b-lg border border-solid border-grayscaleB bg-grayscaleG lg:h-screen lg:col-span-2 lg:rounded-lg">
      <div className="flex flex-row justify-between items-center w-full h-full px-5 py-2 lg:flex-col lg:items-start lg:px-[60px] lg:py-[100px]">
        <div className="flex justify-between items-center gap-4 flex-1 w-[calc(100%-40px)] lg:flex-col lg:justify-start lg:items-start lg:flex-0">
          <h2 className="w-full text-xl tracking-tighter truncate lg:pb-4 lg:border-b lg:border-solid lg:border-grayscaleB/10 lg:text-4xl lg:text-clip lg:whitespace-normal">
            {name} ({englishName})
          </h2>
        </div>

        <button
          type="button"
          onClick={goToBack}
          className="flex items-center w-10 h-10 -order-1 lg:order-none"
        >
          <img
            src="/avocado/images/common/icon_arrow_left_dark.png"
            alt="뒤로 가기 아이콘"
            className="w-6 h-6"
          />
        </button>
      </div>
    </section>
  );
};

export default Lnb;
