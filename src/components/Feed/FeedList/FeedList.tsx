import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import useGetFeed from '../../../hooks/useGetFeed';
import api from '../../../service/TokenService';
import { formatToTodayOrDate } from '../../../utils/dateUtils';
import groupFeedByDate from '../../../utils/groupFeedByDate';
import FeedItem from '../FeedItem/FeedItem';
import { FeedListContainer } from './FeedList.style';

const FeedList = () => {
  if (!api.getAccessToken()) {
    return <>Unauthorized</>;
  }
  const { data } = useGetFeed(0);
  if (!data) {
    return <></>;
  }

  const groupedFeed = groupFeedByDate(data.content);
  const sortedDates = Object.keys(groupedFeed).sort((a, b) => parseInt(b) - parseInt(a));
  return (
    <>
      {sortedDates.map((date) => (
        <FeedListContainer key={date}>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
            {formatToTodayOrDate(parseInt(date))}
          </Txt>
          {groupedFeed[date].map((item) => (
            <FeedItem
              key={item.feedId}
              id={item.memberId}
              name={item.userName}
              repository={item.repoUrl}
              image={item.profileImageUrl}
              category={item.commitType}
              activityTitle={item.commitMessages[item.commitMessages.length - 1].commitLog.slice(6)}
            />
          ))}
        </FeedListContainer>
      ))}
    </>
  );
};

export default FeedList;
