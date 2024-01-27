import { useEffect, useState } from 'react';
import { API } from '../../../../config';
import ListItem from '../../../List/components/ListItem';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const ENDPOINTS = [
  API.BOARDGAME_STRATEGY_TYPE,
  API.BOARDGAME_THEMATIC_TYPE,
  API.BOARDGAME_FAMILY_TYPE,
  API.BOARDGAME_PARTY_TYPE,
  API.BOARDGAME_ABSTRACT_TYPE,
  API.BOARDGAME_WARGAMES_TYPE,
  API.BOARDGAME_CUSTOMIZABLE_TYPE,
];

const MainWrapper = () => {
  const [boardgameData, setBoardgameData] = useState([]);
  let boardgameDataArr = [];

  const getBoardgameData = async () => {
    try {
      const response = await axios.all(
        ENDPOINTS.map(endpoint => axios.get(endpoint)),
      );

      for (let i = 0; i < response.length; i++) {
        boardgameDataArr.push(response[i].data);
      }

      setBoardgameData(boardgameDataArr);
    } catch (error) {
      alert('MainWrapper.jsx > endpoints 7개 중에서 발생한 에러입니다.');
    }
  };

  useEffect(() => {
    getBoardgameData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-span-5 lg:col-span-3 lg:pt-20">
      {/* 
        1. 더보기 > 리스트 라우터 이동 버튼 필요!
        2. 추상 전략 데이터 1개 추가 필요!
        3. 그리드 비율 수정: 2-4 / 총 6
      */}

      {boardgameData.map(
        ({ type, description, isEvent, eventImages, result }, index) => {
          return (
            <section key={index}>
              <div className="flex flex-col justify-between gap-12 px-6 py-12 lg:px-12 lg:py-24 border border-solid border-grayscaleB rounded-lg lg:bg-grayscaleG">
                <h2 className="text-4xl">{type.toUpperCase()}</h2>
                <span className="font-thin">{description}</span>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                    1536: {
                      slidesPerView: 5,
                    },
                  }}
                  className="main-swiper w-full bg-grayscaleB"
                >
                  {result?.map(
                    ({ ranking, yearReleased, image, name }, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="overflow-hidden rounded-lg border border-solid border-grayscaleB"
                        >
                          <ListItem
                            ranking={ranking}
                            yearReleased={yearReleased}
                            image={image}
                            name={name}
                          />
                        </SwiperSlide>
                      );
                    },
                  )}
                </Swiper>
              </div>
              {isEvent && (
                <div className="border border-solid border-grayscaleB rounded-lg bg-grayscaleG">
                  <ul className="flex">
                    {eventImages?.map(({ image, alt }, index) => {
                      return (
                        <li key={index} className="flex-1">
                          <a href="#" className="relative">
                            <img
                              src={image}
                              alt={alt}
                              className="absolute top-0 w-full h-full p-4 object-contain"
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </section>
          );
        },
      )}
    </div>
  );
};

export default MainWrapper;
