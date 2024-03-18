import { FavoriteFriendList } from '../../components/Friend/FavoriteFriendList/FavoriteFriendList';
import { FriendList } from '../../components/Friend/FriendList/FriendList';
import { FriendContainer } from './Friend.style';

const Friend = () => {
  return (
    <FriendContainer>
      <FavoriteFriendList />
      <FriendList />
    </FriendContainer>
  );
};

export default Friend;
