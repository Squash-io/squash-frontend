import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { IcStar, IcStarFill } from '../../../assets';
import { Container, FriendInfoContainer } from './FriendInfo.style';

export const FriendInfo = (props: FriendDetail) => {
  const { avartarUrl, githubName, userName, bio, isStarred } = props;

  const handleClick = async () => {
    window.location.href = `https://github.com/${githubName}`;
  };

  return (
    <Container>
      <div>
        <img className="profile" src={avartarUrl} alt="프로필 사진"></img>
      </div>
      <FriendInfoContainer onClick={handleClick}>
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
