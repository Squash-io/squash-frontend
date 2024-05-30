import { useEffect, useRef } from 'react';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import useGetFeed from '../../../hooks/useGetFeed';
import useGetGuestFeed from '../../../hooks/useGetGuestFeed';
import api from '../../../service/TokenService';
import { formatToTodayOrDate } from '../../../utils/dateUtils';
import groupFeedByDate from '../../../utils/groupFeedByDate';
import FeedItem from '../FeedItem/FeedItem';
import { FeedListContainer, FeedListWrapper, LoadMore } from './FeedList.style';

const FeedList = () => {
  const accessToken = api.getAccessToken();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = accessToken
    ? useGetFeed()
    : useGetGuestFeed();

  const observer = useRef<IntersectionObserver | null>(null);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    const loadMoreElement = document.querySelector('#loadMore');
    if (loadMoreElement) {
      observer.current = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      });

      observer.current.observe(loadMoreElement);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasNextPage, isFetchingNextPage]);

  console.log('Data:', data);

  if (!data) {
    return <></>;
  }

  const groupedFeed = groupFeedByDate(data.pages.flatMap((page) => page.content));
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
              id={item.feedId}
              name={item.userName}
              repository={item.repoUrl}
              image={item.profileImageUrl}
              category={item.commitType}
              activityTitle={
                item.commitMessages.length > 0
                  ? item.commitMessages[item.commitMessages.length - 1].commitLog.slice(6)
                  : ''
              }
            />
          ))}
        </FeedListContainer>
      ))}
      <LoadMore id="loadMore" style={{ height: '0px' }} />
    </>
  );
};

export default FeedList;
