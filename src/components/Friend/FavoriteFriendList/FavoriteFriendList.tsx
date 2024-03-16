import { useState } from 'react';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { FriendContainer, TitleContainer } from '../common/List.style';
import { IcUp, IcDown } from '../../../assets';
import { FavoriteFriendItem } from './FavoriteFriendItem';
import { count, dummyFavoriteFriendList as user } from '../dummyData';

export const FavoriteFriendList = () => {
  const [isDown, setIsDown] = useState(true);

  const handleIconClick = () => {
    setIsDown(!isDown);
  };

  return (
    <>
      <TitleContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="body1" className="title">
          즐겨찾기
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="body1">
          {count}
        </Txt>
        {isDown ? (
          <IcUp className="btn-toggle" onClick={handleIconClick} />
        ) : (
          <IcDown className="btn-toggle" onClick={handleIconClick} />
        )}
      </TitleContainer>
      {isDown && (
        <FriendContainer>
          {user.map((item, index) => (
            <FavoriteFriendItem key={index} user={item} />
          ))}
        </FriendContainer>
      )}
    </>
  );
};
