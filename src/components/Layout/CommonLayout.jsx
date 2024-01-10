import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '../Header/MainHeader';
import TopButton from '../TopButton/TopButton';

/**
 * CommonLayout.js logics
 * 이 컴포넌트는 스크롤 및 뷰포트 추적 로직이 담긴 공통 레이아웃 컴포넌트입니다.
 * @property {function} handleScroll        - 스크롤 시 히어로 섹션(빅배너 슬라이드 배너 영역)을 기준으로 넘어갔는지를 확인하여 상태값을 바꾸는 함수입니다. 여기서 바뀐 상태값은 Header 컴포넌트로 전달됩니다.
 * @property {function} resizeListener      - 뷰포트 리사이징을 감지하는 함수입니다.
 */

const CommonLayout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [isOverHero, setIsOverHero] = useState(false);
  const [isTopButton, setIsTopButton] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const { pathname } = useLocation();
  const breakpoint = 1024;

  const checkRouter = () => {
    if (pathname === '/list' && innerWidth < breakpoint) setIsMain(true);
  };

  const scrollSpy = () => {
    if (innerWidth < breakpoint) {
      window.scrollY > innerHeight ? setIsOverHero(true) : setIsOverHero(false);
    }

    window.scrollY > innerHeight ? setIsTopButton(true) : setIsTopButton(false);
  };

  useEffect(() => {
    checkRouter();

    const resizeSpy = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener('resize', resizeSpy);

    const timer = setInterval(() => {
      window.addEventListener('scroll', scrollSpy);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', scrollSpy);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerWidth, innerHeight, pathname]);

  return (
    <>
      {!isMain && <MainHeader isOverHero={isOverHero} />}
      <Outlet />
      <TopButton isTopButton={isTopButton} />
    </>
  );
};

export default CommonLayout;
