import { useState } from 'react';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { Container, TitleContainer, ListContainer } from './FavoriteFriendList.style';
import { IcUp, IcDown } from '../../../assets';
import { FavoriteFriendItem } from '../FavoriteFriendItem/FavoriteFriendItem';

export const FavoriteFriendList = (props: FriendListRes) => {
  const { sum, friends, onLikeToggle } = props;

  const [isOpen, setIsDown] = useState(true);

  const handleIconClick = () => {
    setIsDown(!isOpen);
  };

  return (
    <Container>
      <TitleContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
          즐겨찾기
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P2">
          {sum}
        </Txt>
        {isOpen ? (
          <div className="btn-toggle">
            <IcUp onClick={handleIconClick} />
          </div>
        ) : (
          <div className="btn-toggle">
            <IcDown onClick={handleIconClick} />
          </div>
        )}
      </TitleContainer>
      {isOpen && (
        <ListContainer>
          {friends.map((item) => (
            <FavoriteFriendItem
              key={item.friendId}
              friendId={item.friendId}
              memberId={item.memberId}
              avartarUrl={item.avartarUrl}
              githubName={item.githubName}
              userName={item.userName}
              bio={item.bio}
              isStarred={item.isStarred}
              onLikeToggle={onLikeToggle}
            />
          ))}
        </ListContainer>
      )}
    </Container>
  );
};
