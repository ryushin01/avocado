import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { customAxios } from '../../modules/customAxios/customAxios';
import Loading from '../../components/Loading/Loading';
import ListWrapper from './components/ListWrapper/ListWrapper';

// [ issue ] 쿼리스트링 변경 및 히스토리백 이슈

const List = () => {
  const params = useParams();
  const { type } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [boardgameData, setBoardgameData] = useState([]);
  const [sort, setSort] = useState('ranking');

  const getBoardgameData = async () => {
    try {
      const response = await customAxios.get(`/boardgame${type}TypeData.json`);
      setBoardgameData(response.data.result);
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
    setListSortParams();
    document.body.style.overflow = '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, sort]);

  return (
    <>
      {loading && <Loading />}
      <ListWrapper boardgameData={boardgameData} setSort={setSort} />
    </>
  );
};

export default List;
