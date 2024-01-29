import { useEffect, useState } from 'react';
import { customAxios } from '../../../../modules/customAxios/customAxios';
import { API } from '../../../../config';
import Filter from '../../../../components/Filter/Filter';
import ListItem from '../ListItem/ListItem';

const ListWrapper = ({ boardgameData, setSort }) => {
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
    <main className="lg:col-span-6">
      <section className="bg-grayscaleG border border-solid border-grayscaleB rounded-lg lg:px-[60px] lg:py-[100px] lg:min-h-screen">
        <div className="fixed top-1 right-1 z-30 flex justify-end lg:sticky lg:top-0 lg:right-auto lg:py-2 bg-grayscaleG">
          <Filter filterData={filterData} switchOption={switchOption} />
        </div>
        <ul className="grid grid-cols-2 bg-grayscaleB bg-[url('/images/list/bg.png')] bg-50% md:grid-cols-3 md:bg-33% xl:grid-cols-4 xl:bg-25% 2xl:grid-cols-5 2xl:bg-20%">
          {boardgameData?.map(
            ({ ranking, yearReleased, image, name }, index) => {
              return (
                <li
                  key={index}
                  className="overflow-hidden rounded-lg border border-solid border-grayscaleB"
                >
                  <ListItem
                    ranking={ranking}
                    yearReleased={yearReleased}
                    image={image}
                    name={name}
                  />
                </li>
              );
            },
          )}
        </ul>
      </section>
    </main>
  );
};

export default ListWrapper;
