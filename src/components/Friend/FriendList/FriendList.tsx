import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { Container, TitleContainer, ListContainer } from './FriendList.style';
import { FriendItem } from '../FriendItem/FriendItem';
import { friendCount, dummyFriendList as user } from '../dummyData';

export const FriendList = () => {
  return (
    <Container>
      <TitleContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="B1">
          친구
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="B1">
          {friendCount}
        </Txt>
      </TitleContainer>
      <ListContainer>
        {user.map((item, index) => (
          <FriendItem key={index} user={item} />
        ))}
      </ListContainer>
    </Container>
  );
};
