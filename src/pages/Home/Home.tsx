import { Outlet } from 'react-router-dom';
import Header from '../../components/@common/Header/Header';
import { HomeSection } from './Home.style';

const Home = () => {
  return (
    <>
      <Header />
      <HomeSection>
        <Outlet />
      </HomeSection>
    </>
  );
};

export default Home;
