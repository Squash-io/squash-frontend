import { ActivityList } from '../../components/FriendDetail/ActivityList/ActivityList';
import { FriendInfo } from '../../components/FriendDetail/FriendInfo/FriendInfo';
import { FriendDetailContainer } from '../FriendDetail/FriendDetail.style';

const FriendDetail = () => {
  return (
    <FriendDetailContainer>
      <FriendInfo></FriendInfo>
      <ActivityList></ActivityList>
    </FriendDetailContainer>
  );
};

export default FriendDetail;
