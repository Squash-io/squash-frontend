import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/@common/Layout/Layout';
import Home from './pages/Home/Home';
import Feed from './pages/Feed/Feed';
import Friend from './pages/Friend/Friend';
import My from './pages/My/My';
import FriendDetail from './pages/FriendDetail/FriendDetail';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}>
          <Route index element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/friendDetail" element={<FriendDetail />} />
          <Route path="/my" element={<My />} />
        </Route>
      </Route>
    </Routes>
  );
};
