import { useEffect, useState } from 'react';
import { customAxios } from '../../../../modules/customAxios/customAxios';
import { API } from '../../../../config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

export default function HeroSection() {
  const [heroData, setHeroData] = useState([]);

  const getHeroData = async () => {
    try {
      const response = await customAxios.get(API.HERO);
      setHeroData(response.data.result);
    } catch (error) {
      alert('Main.jsx > boardgameData.json 에러입니다.');
    }
  };

  useEffect(() => {
    getHeroData();
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        tag="section"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        className="hero-swiper sticky top-0 w-full h-screen col-span-5 lg:col-span-2"
      >
        {heroData?.map(({ content, image, path }, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt={content}
                  className="absolute top-0 w-full h-full object-cover"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
