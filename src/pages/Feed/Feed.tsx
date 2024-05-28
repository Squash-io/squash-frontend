import Banner from '../../components/Feed/Banner/Banner';
import FeedList from '../../components/Feed/FeedList/FeedList';
import api from '../../service/TokenService';
import { FeedContainer } from './Feed.style';

const Feed = () => {
  return (
    <FeedContainer>
      {!api.getAccessToken() && <Banner />}
      <FeedList />
    </FeedContainer>
  );
};

export default Feed;
