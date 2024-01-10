import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommonLayout from './components/Layout/CommonLayout';
import Main from './pages/Main/Main';
import InitializeScroll from './modules/InitializeScroll/InitializeScroll';

const Router = () => {
  return (
    <BrowserRouter basename="/avocado">
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
      <InitializeScroll />
    </BrowserRouter>
  );
};

export default Router;
