import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { Container, ActivityListContainer } from './ActivityList.style';
import { ActivityItem } from '../ActivityItem/ActivityItem';
import { formatToTodayOrDate } from '../../../utils/dateUtils';
import { getFriendDetail } from '../../../apis/getFriendDetail';
import { useState, useEffect } from 'react';
import groupFeedByDate from '../../../utils/groupFeedByDate';

export const ActivityList = (props: ActivityListProps) => {
  const { friendId } = props;
  const [friendDetailList, setFriendDetailList] = useState<FriendDetailRes[]>([]);

  useEffect(() => {
    const fetchFriendDetail = async () => {
      if (friendDetailList.length === 0) {
        const data = await getFriendDetail(friendId);
        setFriendDetailList(data);
      }
    };

    fetchFriendDetail();
  }, [friendId, friendDetailList]);

  const groupedFeed = groupFeedByDate(friendDetailList);
  const sortedDates = Object.keys(groupedFeed).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <Container>
      {sortedDates.map((date) => (
        <ActivityListContainer key={date}>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P2" className="date">
            {formatToTodayOrDate(parseInt(date))}
          </Txt>
          <div className="date-line"></div>
          {groupedFeed[date].map((item) => (
            <ActivityItem
              key={item.feedId}
              id={item.feedId}
              commitType={item.commitType}
              activityTitle={
                item.commitMessages.length > 0
                  ? item.commitMessages[item.commitMessages.length - 1].commitLog.slice(6)
                  : ''
              }
              repoUrl={item.repoUrl}
            ></ActivityItem>
          ))}
        </ActivityListContainer>
      ))}
    </Container>
  );
};
