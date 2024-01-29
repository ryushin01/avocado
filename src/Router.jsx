import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommonLayout from './components/Layout/CommonLayout';
import Gateway from './pages/Gateway/Gateway';
import Footer from './components/Footer/Footer';
import InitializeScroll from './modules/InitializeScroll/InitializeScroll';
// import SignIn from './pages/SignIn/SignIn';
// import SignUp from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter basename="/avocado">
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/main" element={<Main />} />
        </Route>
        <Route path="/" element={<Gateway />} />
        <Route path="/list/:type" element={<List />} />
        <Route path="/detail/:ranking" element={<Detail />} />
      </Routes>
      <Footer />
      <InitializeScroll />
    </BrowserRouter>
  );
};

export default Router;
