import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../../../config';
import Loading from '../../../../components/Loading/Loading';
import ListItem from '../../../List/components/ListItem/ListItem';
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
  // const [loading, setLoading] = useState(true);
  const [allBoardgameData, setAllBoardgameData] = useState([]);
  let allBoardgameDataArr = [];

  const getAllBoardgameData = async () => {
    try {
      const response = await axios.all(
        ENDPOINTS.map(endpoint => axios.get(endpoint)),
      );

      for (let i = 0; i < response.length; i++) {
        allBoardgameDataArr.push(response[i].data);
      }

      setAllBoardgameData(allBoardgameDataArr);
    } catch (error) {
      alert('MainWrapper.jsx > ENDPOINTS에서 발생한 에러입니다.');
    }
  };

  useEffect(() => {
    // setTimeout(() => setLoading(false), 2900);
    getAllBoardgameData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* {loading && <Loading />} */}
      <div className="lg:col-span-4 lg:pt-20">
        {allBoardgameData.map(
          (
            {
              // id,
              type,
              koreanType,
              description,
              isMainEvent,
              isSubEvent,
              eventImages,
              result,
            },
            index,
          ) => {
            return (
              <section key={index}>
                <div className="flex flex-col justify-between gap-12 px-5 py-12 lg:px-12 lg:py-24 border border-solid border-grayscaleB rounded-lg bg-grayscaleG">
                  <h2 className="text-4xl" tabIndex={0}>
                    {type?.toUpperCase()}
                  </h2>
                  <span className="font-thin tracking-tighter">
                    {description}
                  </span>
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
                    className="main-swiper bg-grayscaleB w-[calc(100%+48px)] -mx-6 lg:w-full lg:mx-0"
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
                  <Link
                    to={`/list/${type}`}
                    className="flex justify-between items-center tracking-tighter"
                  >
                    <span>{koreanType}</span>
                    <span className="flex items-center flex-1 pr-7 bg-[url('/images/common/icon_arrow_right_dark.png')] bg-6 bg-right-center bg-no-repeat before:content-[''] before:block before:h-px before:flex-1 before:mx-3 before:bg-grayscaleB">
                      전체 목록 보기
                    </span>
                  </Link>
                </div>

                {isMainEvent && (
                  <div className="h-[70vw] lg:h-[30vw] bg-grayscaleB">
                    <ul className="flex h-full">
                      {eventImages?.map(({ path, image, alt }, index) => {
                        return (
                          <li
                            key={index}
                            className="flex-1 overflow-hidden rounded-lg border border-solid border-grayscaleB"
                          >
                            <a
                              href={path}
                              className="relative block w-full h-full before:content-[''] before:z-10 before:absolute before:inset-0 before:bg-grayscaleA/50"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={image}
                                alt={alt}
                                className="absolute top-0 w-full h-full object-cover"
                              />
                              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-grayscaleG text-3xl lg:text-5xl whitespace-nowrap">
                                {alt}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {isSubEvent && (
                  <div className="h-[50vw] lg:h-[20vw] bg-grayscaleB">
                    <ul className="flex h-full">
                      {eventImages?.map(({ path, image, alt }, index) => {
                        return (
                          <li
                            key={index}
                            className="flex-1 overflow-hidden rounded-lg border border-solid border-grayscaleB"
                          >
                            <a
                              href={path}
                              className="relative block w-full h-full"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={image}
                                alt={alt}
                                className="absolute top-0 w-full h-full object-cover"
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
    </>
  );
};

export default MainWrapper;
