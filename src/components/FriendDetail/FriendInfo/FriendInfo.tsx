import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { IcStar } from '../../../assets';
import { Container, FriendInfoContainer } from './FriendInfo.style';
import { dummyFriendInfo as user } from '../dummyData';

export const FriendInfo = () => {
  const { profile, userId, name, description } = user;

  return (
    <Container>
      <div>
        <img src={profile} alt="프로필 사진"></img>
      </div>
      <FriendInfoContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P3">
          {userId}
        </Txt>
        <Txt color={COLORS.baseColors.gray700} textStyleName="P4">
          {name}
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6" className="user-description">
          {description}
        </Txt>
      </FriendInfoContainer>
      <div>
        <IcStar className="ic-star"></IcStar>
      </div>
    </Container>
  );
};
