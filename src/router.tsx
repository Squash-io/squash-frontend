import { Route, Routes } from 'react-router-dom';
import { Feed } from './components/Feed/Feed';
import { Layout } from './components/@common/Layout/Layout';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Feed />} />
      </Route>
    </Routes>
  );
};
