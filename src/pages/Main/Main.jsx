import { useEffect, useState } from 'react';

/**
 * Main.js logics
 * @property {function} getBoardgameData      - 보드 게임 데이터를 받아오는 함수입니다.
 */

const Main = () => {
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
          setBoardgameData(result.data);
        }
      });
  };

  useEffect(() => {
    getBoardgameData();
  }, []);

  console.log(boardgameData);

  return (
    <>
      <div className="h-[2000px]">test</div>
    </>
  );
};

export default Main;
