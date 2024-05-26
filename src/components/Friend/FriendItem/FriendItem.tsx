import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { IcStar } from '../../../assets';
import { FriendItemContainer } from './FriendItem.style';
import { useNavigate } from 'react-router-dom';

interface User {
  profile: string;
  id: string;
  isStarred: boolean;
}

interface FriendItemProps {
  user: User;
}

export const FriendItem = ({ user }: FriendItemProps) => {
  const navigate = useNavigate();
  const handleToMoveFriendDetail = () => {
    navigate('/friendDetail');
  };
  return (
    <FriendItemContainer onClick={handleToMoveFriendDetail}>
      <div>
        <img src={user.profile} alt="프로필 사진"></img>
      </div>
      <Txt color={COLORS.baseColors.gray950} textStyleName="P3" className="user-id">
        {user.id}
      </Txt>
      <div className="btn-favorite">
        <IcStar />
      </div>
    </FriendItemContainer>
  );
};
