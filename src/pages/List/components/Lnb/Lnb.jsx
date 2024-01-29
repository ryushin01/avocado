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
    <section className="sticky top-0 z-20 w-full rounded-t-0 rounded-b-lg border border-solid border-grayscaleB bg-grayscaleG lg:h-screen lg:col-span-2 lg:rounded-lg">
      <div className="flex flex-row justify-between items-center w-full h-full px-5 py-0 lg:flex-col lg:items-start lg:px-[60px] lg:py-[100px]">
        <div className="flex justify-between items-center gap-4 flex-1 lg:flex-col lg:justify-start lg:items-start lg:flex-0">
          <h2 className="w-full text-xl tracking-tighter lg:pb-4 lg:border-b lg:border-solid lg:border-grayscaleB/10 lg:text-4xl">
            {type?.toUpperCase()}
          </h2>
          <Filter filterData={filterData} switchOption={switchOption} />
        </div>

        <Link
          to="/main"
          className="flex items-center w-10 h-10 -order-1 lg:order-none"
        >
          <img
            src="/avocado/images/common/icon_arrow_left_dark.png"
            alt="뒤로 가기 아이콘"
            className="w-6 h-6"
          />
        </Link>
      </div>
    </section>
  );
};

export default Lnb;
