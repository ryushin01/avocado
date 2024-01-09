import { useEffect, useState } from 'react';
import { ReactComponent as IconClose } from '../../images/common/icon_close.svg';

const Nav = ({ toggleSideNav, handleSideNav }) => {
  const [boardgameTypeData, setBoardgameTypeData] = useState([]);

  const getBoardgameTypeData = () => {
    fetch('/avocado/data/boardgameTypeData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          setBoardgameTypeData(result.data);
        }
      });
  };

  useEffect(() => {
    getBoardgameTypeData();
  }, []);

  return (
    <nav
      className={`fixed top-[-100%] left-0 w-screen h-screen z-50 bg-grayscaleB animate-cover overflow-y-auto ${
        toggleSideNav ? 'open' : ''
      }`}
    >
      <section>
        <div className="flex justify-end items-center px-5 lg:px-[60px] bg-grayscaleG rounded-b-lg border border-solid border-grayscaleB">
          <h2 className="a11y-hidden">사이드 네비게이션</h2>
          <button
            type="button"
            className="flex justify-end items-center w-12 h-12 lg:w-20 lg:h-20"
            onClick={handleSideNav}
          >
            <IconClose className="w-6 h-6 lg:w-10 lg:h-10" />
          </button>
        </div>
        <div className="bg-grayscaleG rounded-lg px-5 py-3.5">
          <ul>
            {boardgameTypeData.map(({ typeId, name, englishName }, index) => {
              return (
                <li key={index}>
                  <button type="button">
                    {typeId} {name} {englishName}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
