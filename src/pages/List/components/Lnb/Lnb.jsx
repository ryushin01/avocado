import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { customAxios } from '../../../../modules/customAxios/customAxios';
import { API } from '../../../../config';
import Filter from '../../../../components/Filter/Filter';

const Lnb = ({ boardgameTypeData, setSort }) => {
  const { type } = boardgameTypeData;

  const [filterData, setFilterData] = useState([]);

  const getFilterData = async () => {
    try {
      const response = await customAxios.get(API.FILTER);
      setFilterData(response.data.result);
    } catch (error) {
      alert('ListWrapper.jsx > filterData.json에서 발생한 에러입니다.');
    }
  };

  const switchOption = e => {
    setSort(e.target.value);
  };

  useEffect(() => {
    getFilterData();
  }, []);

  return (
    <section className="w-full overflow-hidden rounded-lg border border-solid border-grayscaleB bg-grayscaleG lg:h-screen lg:sticky lg:top-0 lg:col-span-2">
      <div className="flex flex-row justify-between w-full h-full p-5 lg:flex-col lg:px-[60px] lg:py-[180px]">
        <div className="flex justify-between items-center gap-4 flex-1 lg:flex-col lg:justify-start lg:items-start lg:flex-0">
          <h2 className="w-full text-2xl tracking-tighter lg:pb-4 lg:border-b lg:border-solid lg:border-grayscaleB/10 lg:text-4xl">
            {type?.toUpperCase()}
          </h2>
          <Filter filterData={filterData} switchOption={switchOption} />
        </div>

        <Link to="/" className="-order-1 lg:order-none">
          <img
            src="/avocado/images/common/icon_arrow_left_dark.png"
            alt="뒤로 가기 아이콘"
            className="w-10 h-10"
          />
        </Link>
      </div>
    </section>
  );
};

export default Lnb;
