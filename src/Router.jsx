import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter basename="/avocado">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
