import { FavoriteFriendList } from '../../components/Friend/FavoriteFriendList/FavoriteFriendList';
import { FriendList } from '../../components/Friend/FriendList/FriendList';
import { Container } from './Friend.style';

const Friend = () => {
  return (
    <Container>
      <FavoriteFriendList />
      <FriendList />
    </Container>
  );
};

export default Friend;
