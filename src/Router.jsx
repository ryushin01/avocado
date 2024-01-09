import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter basename="/avocado">
      <Routes>
        {/* MainLayout 컴포넌트 안의 페이지 컴포넌트들은 공통 Header 컴포넌트를 가져옵니다. */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
        </Route>

        {/* 리스트 페이지는 다른 헤더가 필요하므로 아래에 작성합니다. */}
      </Routes>
      {/* Footer는 공통 컴포넌트이므로 아래 작성합니다. */}
    </BrowserRouter>
  );
};

export default Router;
