import { IcSquash } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import LoginButton from '../../@common/LoginButton/LoginButton';
import { GuestMyContainer, GuestMyContent } from './GuestMy.style';

const GuestMy = () => {
  return (
    <GuestMyContainer>
      <GuestMyContent>
        <IcSquash />
        <Txt color={COLORS.baseColors.gray800} textStyleName="P3">
          깃허브로 로그인하고 레포관리와 목표관리 해보세요!
        </Txt>
      </GuestMyContent>
      <LoginButton />
    </GuestMyContainer>
  );
};

export default GuestMy;
