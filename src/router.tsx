import { Route, Routes } from 'react-router-dom';
import { Feed } from './components/Feed/Feed';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
    </Routes>
  );
};
