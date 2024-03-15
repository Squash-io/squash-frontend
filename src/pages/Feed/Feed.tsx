import Banner from '../../components/Feed/Banner/Banner';
import FeedList from '../../components/Feed/FeedList/FeedList';
import { FeedContainer } from './Feed.style';

const Feed = () => {
  return (
    <FeedContainer>
      <Banner />
      <FeedList />
    </FeedContainer>
  );
};

export default Feed;
