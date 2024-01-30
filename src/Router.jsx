import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommonLayout from './components/Layout/CommonLayout';
import MainLayout from './components/Layout/MainLayout';
import Gateway from './pages/Gateway/Gateway';
import Footer from './components/Footer/Footer';
import InitializeScroll from './modules/InitializeScroll/InitializeScroll';
import SignIn from './pages/Account/SignIn/SignIn';
import SignUp from './pages/Account/SignUp/SignUp';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter basename="/avocado">
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route element={<CommonLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/list/:type" element={<List />} />
          <Route path="/detail/:ranking" element={<Detail />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
      <Footer />
      <InitializeScroll />
    </BrowserRouter>
  );
};

export default Router;
