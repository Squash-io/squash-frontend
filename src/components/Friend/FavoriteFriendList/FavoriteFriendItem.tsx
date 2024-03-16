import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { ItemContainer, UserInfoContainer } from './FavoriteFriendItem.style';

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
  return (
    <ItemContainer>
      <img src={user.profile} alt="프로필 사진"></img>
      <UserInfoContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="body2B" className="user-id">
          {user.id}
        </Txt>
        <Txt color={COLORS.baseColors.gray700} textStyleName="body2B" className="user-name">
          {user.name}
        </Txt>
        <Txt color={COLORS.baseColors.gray400} textStyleName="caption" className="user-description">
          {user.description}
        </Txt>
      </UserInfoContainer>
    </ItemContainer>
  );
};
