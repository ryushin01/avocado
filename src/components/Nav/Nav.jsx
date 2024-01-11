import { useEffect, useState } from 'react';
import { ReactComponent as IconClose } from '../../images/common/icon_close.svg';

const MENU_ARRAY = [{ name: 'GAME' }, { name: 'ACC' }, { name: 'EVENT' }];

const Nav = ({ toggleSideNav, handleSideNav }) => {
  const [boardgameTypeData, setBoardgameTypeData] = useState([]);
  const [currentTab, clickTab] = useState(0);

  const selectMenuHandler = index => {
    clickTab(index);
  };

  const getBoardgameTypeData = () => {
    fetch('/avocado/data/boardgameTypeData.json;', {
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

  const aa = typeId => {
    // console.log(typeId);
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
        <div className="sticky top-0 flex justify-end items-center px-5 lg:px-[60px] bg-grayscaleG rounded-b-lg border-b border-solid border-grayscaleB">
          <h2 className="a11y-hidden">사이드 네비게이션</h2>
          <button
            type="button"
            className="flex justify-end items-center w-12 h-12 lg:w-20 lg:h-20"
            onClick={handleSideNav}
          >
            <IconClose className="w-6 h-6 lg:w-10 lg:h-10" />
          </button>
        </div>
        <div className="rounded-lg">
          <ul className="flex bg-grayscaleB">
            {MENU_ARRAY.map(({ name }, index) => (
              <li
                key={index}
                className={`tab flex-1 rounded-lg border-x border-solid border-grayscaleB text-grayscaleE font-bold ${
                  index === currentTab ? 'selected' : ''
                }`}
                onClick={() => selectMenuHandler(index)}
              >
                <button
                  type="button"
                  className="block w-full h-[60px] lg:h-[90px]"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 py-3.5 lg:px-[60px] lg:py-[40px] rounded-lg border-y border-solid border-grayscaleB bg-grayscaleG">
          <ul>
            {boardgameTypeData.map(({ typeId, englishName }, index) => {
              return (
                <li
                  key={index}
                  className="border-b-[1px] border-solid border-grayscaleF last:border-b-0"
                >
                  <button
                    type="button"
                    className="w-full h-[54px] lg:h-20 text-[14px] lg:text-xl font-bold text-grayscaleB bg-[url('/images/common/icon_arrow_right.svg')] bg-4 lg:bg-8 bg-no-repeat bg-right-center text-left"
                    onClick={aa(typeId)}
                  >
                    {englishName}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section>
        <div className="w-full h-[100px] lg:h-[200px] rounded-lg bg-[url('/images/common/img_side_nav_banner.jpg')] bg-no-repeat bg-center bg-cover text-[1px] text-transparent relative before:content-[''] before:absolute before:inset-0 before:bg-grayscaleB/50">
          이벤트 배너
        </div>
      </section>
      <footer>
        <div className="px-5 pt-[30px] pb-[160px] lg:px-[60px] lg:pt-[60px] rounded-t-lg bg-grayscaleG">
          <ul className="flex items-center gap-5">
            <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
              아보카도 소개
            </li>
            <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
              개인정보 처리방침
            </li>
            <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
              이용약관
            </li>
            <li className="text-xs lg:text-base text-grayscaleB whitespace-nowrap font-bold">
              고객센터
            </li>
          </ul>
          <ul className="mt-5 lg:mt-10">
            <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
              (주) 아보카도
            </li>
            <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
              대표자 | 김기영
            </li>
            <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
              주소 | 서울특별시 중구 한강대로 416 위워크 서울스퀘어점
            </li>
            <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
              대표전화 | 0000-0000
            </li>
            <li className="text-[11px] lg:text-base lg:leading-8 text-grayscaleB">
              이메일 | help@avocado.com
            </li>
          </ul>
          <span className="block mt-5 lg:mt-10 text-[11px] lg:text-base text-grayscaleB tracking-[-0.4px]">
            COPYRIGHT© 2024 AVOCADO. ALL RIGHT RESERVED
          </span>
        </div>
      </footer>
    </nav>
  );
};

export default Nav;
