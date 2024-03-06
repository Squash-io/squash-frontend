import { Route, Routes } from 'react-router-dom';
import { Home } from './\bcomponents/Home/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
