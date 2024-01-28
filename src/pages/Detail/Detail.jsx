import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { customAxios } from '../../modules/customAxios/customAxios';
import { API } from '../../config';
import Loading from '../../components/Loading/Loading';
import Lnb from './Lnb/Lnb';
import DetailWrapper from './DetailWrapper/DetailWrapper';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [boardgameData, setBoardgameData] = useState([]);
  const location = useLocation();
  const { ranking } = location.state;
  const rankingInt = Number(ranking);

  const getBoardgameData = async rankingInt => {
    try {
      const response = await customAxios.get(API.BOARDGAME);
      setBoardgameData(response.data.result[rankingInt - 1]);
      setLoading(false);
    } catch (error) {
      alert('Detail.jsx > boardgameAllData.json에서 발생한 에러입니다.');
    }
  };

  const {
    bggId,
    blId,
    name,
    englishName,
    image,
    yearReleased,
    players,
    best,
    playingTime,
    minAge,
    average,
    averageWeight,
    designer,
    type,
    category,
  } = boardgameData;

  let processedDesignerData = designer?.join(', ');
  let processedTypeData = type?.join(', ');
  let processedCategoryData = category?.join(', ');

  useEffect(() => {
    setLoading(true);
    getBoardgameData(rankingInt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loading />}
      <main>
        <div className="grid grid-cols-1 w-full lg:grid-cols-6">
          <Lnb name={name} englishName={englishName} />
          <DetailWrapper
            ranking={rankingInt}
            bggId={bggId}
            blId={blId}
            image={image}
            yearReleased={yearReleased}
            players={players}
            best={best}
            playingTime={playingTime}
            minAge={minAge}
            average={average}
            averageWeight={averageWeight}
            processedDesignerData={processedDesignerData}
            processedTypeData={processedTypeData}
            processedCategoryData={processedCategoryData}
          />
        </div>
      </main>
    </>
  );
};

export default Detail;
