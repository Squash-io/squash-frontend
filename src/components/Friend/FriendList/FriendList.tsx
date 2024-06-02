import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { Container, TitleContainer, ListContainer } from './FriendList.style';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = (props: FriendListRes) => {
  const { sum, friends, onLikeToggle } = props;

  return (
    <Container>
      <TitleContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="B1">
          친구
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="B1">
          {sum}
        </Txt>
      </TitleContainer>
      <ListContainer>
        {friends.map((item) => (
          <FriendItem
            key={item.friendId}
            friendId={item.friendId}
            memberId={item.memberId}
            avartarUrl={item.avartarUrl}
            githubName={item.githubName}
            userName={item.userName}
            bio={item.bio}
            isStarred={item.isStarred}
            // setIsStarred={setIsStarred}
            onLikeToggle={onLikeToggle}
          />
        ))}
      </ListContainer>
    </Container>
  );
};
