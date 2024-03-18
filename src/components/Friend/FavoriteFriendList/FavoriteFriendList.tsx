import { useState } from 'react';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { Container, TitleContainer, ListContainer } from './FavoriteFriendList.style';
import { IcUp, IcDown } from '../../../assets';
import { FavoriteFriendItem } from '../FavoriteFriendItem/FavoriteFriendItem';
import { count, dummyFavoriteFriendList as user } from '../dummyData';

export const FavoriteFriendList = () => {
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
          {count}
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
          {user.map((item, index) => (
            <FavoriteFriendItem key={index} user={item} />
          ))}
        </ListContainer>
      )}
    </Container>
  );
};
