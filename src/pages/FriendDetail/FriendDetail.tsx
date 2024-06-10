import { ActivityList } from '../../components/FriendDetail/ActivityList/ActivityList';
import { FriendInfo } from '../../components/FriendDetail/FriendInfo/FriendInfo';
import { FriendDetailContainer, FriendContribution } from '../FriendDetail/FriendDetail.style';
import { useLocation } from 'react-router-dom';

const FriendDetail = () => {
  const { state } = useLocation();
  const { friendId, memberId, avartarUrl, githubName, userName, bio, isStarred } = state;

  return (
    <FriendDetailContainer>
      <FriendInfo
        friendId={friendId}
        memberId={memberId}
        avartarUrl={avartarUrl}
        githubName={githubName}
        userName={userName}
        bio={bio}
        isStarred={isStarred}
      ></FriendInfo>
      <FriendContribution>
        <img src={`https://ghchart.rshah.org/219138/${githubName}`} />
      </FriendContribution>
      <ActivityList friendId={friendId} />
    </FriendDetailContainer>
  );
};

export default FriendDetail;
