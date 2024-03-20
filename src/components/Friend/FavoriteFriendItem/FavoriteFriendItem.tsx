import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { FavoriteFriendItemContainer, FriendInfoContainer } from './FavoriteFriendItem.style';
import { useNavigate } from 'react-router-dom';

interface User {
  profile: string;
  id: string;
  name: string;
  description: string;
}

interface FavoriteFriendItemProps {
  user: User;
}

export const FavoriteFriendItem = ({ user }: FavoriteFriendItemProps) => {
  const navigate = useNavigate();
  const handleToMoveFriendDetail = () => {
    navigate('/friendDetail');
  };
  return (
    <FavoriteFriendItemContainer onClick={handleToMoveFriendDetail}>
      <div>
        <img src={user.profile} alt="프로필 사진"></img>
      </div>
      <FriendInfoContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P3">
          {user.id}
        </Txt>
        <Txt color={COLORS.baseColors.gray700} textStyleName="P4">
          {user.name}
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6" className="user-description">
          {user.description}
        </Txt>
      </FriendInfoContainer>
    </FavoriteFriendItemContainer>
  );
};
