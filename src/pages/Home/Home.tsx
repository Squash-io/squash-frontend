import { Outlet } from 'react-router-dom';
import Header from '../../components/@common/Header/Header';
import { HomeSection } from './Home.style';
import Nav from '../../components/@common/Nav/Nav';

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <HomeSection>
        <Outlet />
      </HomeSection>
    </>
  );
};

export default Home;
