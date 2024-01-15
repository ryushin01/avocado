import { useEffect, useState } from 'react';
import { ReactComponent as IconAverage } from '../../../images/common/icon_average.svg';
import { ReactComponent as IconRanking } from '../../../images/common/icon_ranking.svg';
import { ReactComponent as IconWeight } from '../../../images/common/icon_weight.svg';

const Detail = (
  {
    // ranking,
    // bggId,
    // blId,
    // name,
    // englishName,
    // image,
    // yearReleased,
    // players,
    // best,
    // playingTime,
    // minAge,
    // average,
    // averageWeight,
    // designer,
    // type,
  },
) => {
  const [boardgameData, setBoardgameData] = useState([]);

  const getBoardgameData = () => {
    fetch('/avocado/data/boardgameData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          setBoardgameData(result.data[0]);
        }
      });
  };

  const {
    ranking,
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
  } = boardgameData;

  let processedDesignerData = designer?.join(', ');

  useEffect(() => {
    getBoardgameData();
  }, []);

  return (
    <div className="flex flex-col gap-10 p-5 lg:p-[60px] lg:flex-row">
      <div className="flex flex-col gap-5 lg:basis-1/3">
        <div className="relative w-full pb-[150%] overflow-hidden rounded-lg lg:pb-[100%]">
          <img
            src={image}
            alt={name}
            className="absolute top-0 w-full h-full object-cover"
          />
          {ranking <= 10 && (
            <img
              src="/avocado/images/common/icon_top_ten.png"
              alt="10위권 표시 아이콘"
              className="absolute top-2 left-2 w-10 h-10"
            />
          )}
        </div>
        <div className="py-5 bg-grayscaleB text-grayscaleF rounded-lg">
          <ul className="grid col-gap grid-cols-3 text-center">
            <li
              className="flex gap-2 justify-center items-center"
              title="이것은 순위를 의미합니다."
            >
              <IconRanking className="w-8 h-8" />
              <span className="text-lg text-bold">{ranking}</span>
            </li>
            <li
              className="flex gap-2 justify-center items-center relative before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[1px] before:h-3 before:bg-grayscaleG/20 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:w-[1px] after:h-3 after:bg-grayscaleG/20"
              title="이것은 평균 평점을 의미합니다."
            >
              <IconAverage className="w-8 h-8" />
              <span
                className={`text-lg text-bold ${
                  average > 8
                    ? 'text-bggHigh'
                    : averageWeight > 7
                      ? 'text-bggLow'
                      : ''
                }`}
              >
                {average}
              </span>
            </li>
            <li
              className="flex gap-2 justify-center items-center"
              title="이것은 평균 난이도를 의미합니다."
            >
              <IconWeight className="w-8 h-8" />
              <span
                className={`text-lg text-bold ${
                  averageWeight > 4
                    ? 'text-bggHeavy'
                    : averageWeight > 3
                      ? 'text-bggMedium'
                      : averageWeight > 1
                        ? 'text-bggLight'
                        : ''
                }`}
              >
                {averageWeight}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-1">
        <h3 className="flex flex-col">
          <span className="text-xl text-bold lg:text-3xl">
            {name} ({yearReleased})
          </span>
          <span className="text-sm text-grayscaleE/30 lg:text-lg">
            {englishName}
          </span>
        </h3>
        <ul className="flex flex-col gap-2 text-sm lg:text-lg">
          <li>디자이너: {processedDesignerData}</li>
          <li>
            카테고리:{' '}
            {type === 'Strategy'
              ? '전략 게임'
              : type === 'Thematic'
                ? '테마 게임'
                : type === 'Family'
                  ? '가족 게임'
                  : type === 'Party'
                    ? '파티 게임'
                    : type === 'Abstract'
                      ? '추상 전략 게임'
                      : type === 'Wargames'
                        ? '워게임'
                        : '컬렉터블 게임'}
          </li>
          <li>플레이 인원: {players}명</li>
          <li>적정 인원: {best}명</li>
          <li>플레이 타임: {playingTime}분</li>
          <li>권장 최소 나이: {minAge}세</li>
        </ul>
      </div>

      <div className="flex lg:flex-col lg:gap-5 lg:basis-1/6">
        <button>{bggId}</button>
        <button>{blId}</button>
      </div>
    </div>
  );
};

export default Detail;
