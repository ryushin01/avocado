// 필터 시 평탄화 진행 필요?

import { useEffect, useState } from 'react';
// import { customAxios } from '../../modules/customAxios/customAxios';
// import { API } from '../../config';
import HeroSection from './components/HeroSection/HeroSection';
import MainWrapper from './components/MainWrapper/MainWrapper';

/**
 * Main.js logics
 * @property {function} getBoardgameData      - 보드 게임 데이터를 받아오는 함수입니다.
 */

const Main = () => {
  // const [boardgameData, setBoardgameData] = useState([]);

  // const getBoardgameData = async () => {
  //   try {
  //     const response = await customAxios.get(API.BOARDGAME);
  //     setBoardgameData(response.data.result);
  //   } catch (error) {
  //     alert('Main.jsx > boardgameData.json 에러입니다.');
  //   }
  // };

  // useEffect(() => {
  //   getBoardgameData();
  // }, []);

  // console.log(boardgameData);

  return (
    <main>
      <div className="grid grid-cols-2 lg:grid-cols-6 w-full">
        <HeroSection />
        <MainWrapper />
      </div>
    </main>
  );
};

export default Main;
