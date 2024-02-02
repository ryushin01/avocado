import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { customAxios } from '../../modules/customAxios/customAxios';
import { API } from '../../config';
import Footer from '../Footer/Footer';
import { ReactComponent as IconClose } from '../../images/common/icon_close.svg';

const MENU_ARRAY = [{ name: 'GAME' }, { name: 'ACC' }, { name: 'EVENT' }];

const Nav = ({ toggleSideNav, handleSideNav }) => {
  const [boardgameTypeData, setBoardgameTypeData] = useState([]);
  const [currentTab, clickTab] = useState(0);

  const selectMenuHandler = index => {
    clickTab(index);
  };

  const getBoardgameTypeData = async () => {
    try {
      const response = await customAxios.get(API.BOARDGAME_TYPE);
      setBoardgameTypeData(response.data.result);
    } catch (error) {
      alert('Nav.jsx > boardgameTypeData.json 에러입니다.');
    }
  };

  useEffect(() => {
    getBoardgameTypeData();
  }, []);

  return (
    <nav
      className={`fixed top-[-100%] left-0 w-screen h-screen z-50 bg-grayscaleB animate-waterfall overflow-y-auto ${
        toggleSideNav ? 'open' : ''
      }`}
    >
      <section>
        <div className="sticky z-10 top-0 flex justify-between items-center px-5 lg:px-[60px] bg-grayscaleG rounded-b-lg border-b border-solid border-grayscaleB">
          <h2 className="a11y-hidden">사이드 네비게이션</h2>
          <div className="flex gap-6 text-grayscaleB text-[14px] lg:text-xl lg:gap-10">
            <Link to="/signin">
              <img
                src="/avocado/images/common/icon_signin.png"
                alt="로그인 이미지"
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </Link>
            <Link to="/signup">
              <img
                src="/avocado/images/common/icon_signup.png"
                alt="회원가입 이미지"
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </Link>
          </div>
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
            {boardgameTypeData.map(({ type }, index) => {
              return (
                <li
                  key={index}
                  className="border-b-[1px] border-solid border-grayscaleF last:border-b-0"
                >
                  <Link
                    to={`/list/${type}`}
                    className="flex items-center w-full h-[54px] lg:h-20 text-[14px] lg:text-xl font-bold text-grayscaleB bg-[url('/images/common/icon_arrow_right.svg')] bg-4 lg:bg-8 bg-no-repeat bg-right-center text-left"
                  >
                    {type.toUpperCase()}
                  </Link>
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
      <Footer />
    </nav>
  );
};

export default Nav;
