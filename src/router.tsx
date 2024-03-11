import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/@common/Layout/Layout';
import Home from './pages/Home/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};
