import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { customAxios } from '../../modules/customAxios/customAxios';
import Loading from '../../components/Loading/Loading';
import Lnb from './components/Lnb/Lnb';
import ListWrapper from './components/ListWrapper/ListWrapper';

const List = () => {
  const params = useParams();
  const { type } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [boardgameTypeData, setBoardgameTypeData] = useState([]);
  const [boardgameData, setBoardgameData] = useState([]);
  const [sort, setSort] = useState('ranking');

  const getBoardgameData = async () => {
    try {
      const response = await customAxios.get(`/boardgame${type}TypeData.json`);
      setBoardgameTypeData(response.data);
      setBoardgameData(response.data.result);
      setListSortParams();
      setLoading(false);
    } catch (error) {
      alert(`List.jsx > boardgame${type}TypeData.json에서 발생한 에러입니다.`);
    }
  };

  const setListSortParams = () => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setLoading(true);
    getBoardgameData();
    document.body.style.overflow = '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, sort]);

  return (
    <>
      {loading && <Loading />}
      <main>
        <div className="grid grid-cols-1 w-full lg:grid-cols-6">
          <Lnb boardgameTypeData={boardgameTypeData} setSort={setSort} />
          <ListWrapper boardgameData={boardgameData} />
        </div>
      </main>
    </>
  );
};

export default List;
