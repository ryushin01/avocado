import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommonLayout from './components/Layout/CommonLayout';
import Footer from './components/Footer/Footer';
import InitializeScroll from './modules/InitializeScroll/InitializeScroll';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter basename="/avocado">
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/list/:type" element={<List />} />
        <Route path="/detail/:ranking" element={<Detail />} />
      </Routes>
      <Footer />
      <InitializeScroll />
    </BrowserRouter>
  );
};

export default Router;
