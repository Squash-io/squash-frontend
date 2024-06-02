import { IcSquash } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import LoginButton from '../../@common/LoginButton/LoginButton';
import { GuestFriendContainer, GuestFriendContent } from './GuestFriend.style';

const GuestFriend = () => {
  return (
    <GuestFriendContainer>
      <GuestFriendContent>
        <IcSquash />
        <Txt color={COLORS.baseColors.gray800} textStyleName="P3">
          깃허브로 로그인하고 친구 목록을 관리 해보세요!
        </Txt>
      </GuestFriendContent>
      <LoginButton />
    </GuestFriendContainer>
  );
};

export default GuestFriend;
