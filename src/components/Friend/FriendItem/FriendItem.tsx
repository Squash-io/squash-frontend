import { useState, useEffect } from 'react';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { IcStar, IcStarFill } from '../../../assets';
import { FriendItemContainer, FriendInfoContainer } from './FriendItem.style';
import { useNavigate } from 'react-router-dom';

export const FriendItem = (props: Friend) => {
  const { friendId, memberId, avartarUrl, githubName, userName, bio, isStarred, onLikeToggle } =
    props;

  const navigate = useNavigate();

  const handleToMoveFriendDetail = () => {
    navigate('/friendDetail', {
      state: { friendId, memberId, avartarUrl, githubName, userName, bio, isStarred },
    });
  };

  const handleLikeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onLikeToggle(friendId, isStarred);
  };

  return (
    <FriendItemContainer onClick={handleToMoveFriendDetail}>
      <div>
        <img src={avartarUrl} alt="프로필 사진"></img>
      </div>
      <FriendInfoContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P3">
          {githubName}
        </Txt>
        <Txt color={COLORS.baseColors.gray700} textStyleName="P4">
          {userName}
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6" className="user-description">
          {bio}
        </Txt>
      </FriendInfoContainer>
      <div className="btn-favorite" onClick={handleLikeClick}>
        {isStarred ? <IcStarFill /> : <IcStar />}
      </div>
    </FriendItemContainer>
  );
};
