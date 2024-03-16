import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { FriendContainer, TitleContainer } from '../common/List.style';
import { FriendItem } from './FriendItem';
import { count, dummyFriendList as user } from '../dummyData';

export const FriendList = () => {
  return (
    <>
      <TitleContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="B1" className="title">
          친구
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="B1">
          {count}
        </Txt>
      </TitleContainer>
      <FriendContainer>
        {user.map((item, index) => (
          <FriendItem key={index} user={item} />
        ))}
      </FriendContainer>
    </>
  );
};
