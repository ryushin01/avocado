import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

/**
 * MainLayout.js logics
 * 이 컴포넌트는 공통 Header가 포함된 레이아웃 컴포넌트입니다.
 * @property {function} handleScroll        - 스크롤 시 히어로 섹션(빅배너 슬라이드 배너 영역)을 기준으로 넘어갔는지를 확인하여 상태값을 바꾸는 함수입니다. 여기서 바뀐 상태값은 Header 컴포넌트로 전달됩니다.
 * @property {function} resizeListener      - 뷰포트 리사이징을 감지하는 함수입니다.
 */

const MainLayout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [isOverHero, setIsOverHero] = useState(false);

  const handleScroll = () => {
    if (innerWidth < 1024) {
      window.scrollY > innerHeight ? setIsOverHero(true) : setIsOverHero(false);
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener('resize', resizeListener);

    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerWidth, innerHeight]);

  return (
    <>
      <Header isOverHero={isOverHero} />
      <Outlet />
    </>
  );
};

export default MainLayout;
