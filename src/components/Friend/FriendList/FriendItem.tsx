import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { IcStar } from '../../../assets';
import { ItemContainer } from './FriendItem.style';

interface User {
  profile: string;
  id: string;
  isFavorite: boolean;
}

interface FriendItemProps {
  user: User;
}

export const FriendItem = ({ user }: FriendItemProps) => {
  return (
    <ItemContainer>
      <img src={user.profile} alt="프로필 사진"></img>
      <Txt color={COLORS.baseColors.gray950} textStyleName="P3" className="user-id">
        {user.id}
      </Txt>
      <IcStar className="btn-star" />
    </ItemContainer>
  );
};
