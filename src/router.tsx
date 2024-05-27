import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/@common/Layout/Layout';
import Home from './pages/Home/Home';
import Feed from './pages/Feed/Feed';
import Friend from './pages/Friend/Friend';
import My from './pages/My/My';
import FriendDetail from './pages/FriendDetail/FriendDetail';
import FeedDetail from './pages/FeedDetail/FeedDetail';
import LoginRedirectPage from './pages/Login/LoginRedirectPage';
import CreateCategory from './components/My/CreateCategory/CreateCategory';
import CreateGoal from './components/My/CreateGoal/CreateGoal';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/github/login/callback" element={<LoginRedirectPage />} />
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feedDetail" element={<FeedDetail />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/friendDetail" element={<FriendDetail />} />
          <Route path="/my" element={<My />} />
          <Route path="/my/category" element={<CreateCategory />} />
          <Route path="/my/goal" element={<CreateGoal />} />
        </Route>
      </Route>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
