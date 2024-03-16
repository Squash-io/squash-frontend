import Banner from '../../components/Feed/Banner/Banner';
import FeedList from '../../components/Feed/FeedList/FeedList';
import { FeedBox, FeedContainer } from './Feed.style';

const Feed = () => {
  return (
    <FeedContainer>
      <Banner />
      <FeedBox>
        <FeedList />
      </FeedBox>
    </FeedContainer>
  );
};

export default Feed;
