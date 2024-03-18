import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { Container, ActivityListContainer } from './ActivityList.style';
import { dummyFriendActivity as activity } from '../dummyData';
import { ActivityItem } from '../ActivityItem/ActivityItem';
import { formatToTodayOrDate } from '../../../utils/dateUtils';

export const ActivityList = () => {
  return (
    <Container>
      {activity.map((list) => (
        <ActivityListContainer key={list.day}>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P2" className="date">
            {formatToTodayOrDate(list.day)}
          </Txt>
          <div className="date-line"></div>
          {list.data.map((item) => (
            <ActivityItem key={item.id} props={item}></ActivityItem>
          ))}
        </ActivityListContainer>
      ))}
    </Container>
  );
};
