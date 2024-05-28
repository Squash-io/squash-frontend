import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { IcStar, IcStarFill } from '../../../assets';
import { Container, FriendInfoContainer } from './FriendInfo.style';

export const FriendInfo = (props: FriendDetail) => {
  const { avartarUrl, githubName, userName, bio, isStarred } = props;
  return (
    <Container>
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
      <div className="ic-star">{isStarred ? <IcStarFill /> : <IcStar />}</div>
    </Container>
  );
};
