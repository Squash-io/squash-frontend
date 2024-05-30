import { getGuestFeed } from '../apis/getGuestFeed';
import { useInfiniteQuery } from 'react-query';

const QUERY_KEY = {
  getGuestFeed: 'getGuestFeed',
};
export const useGetGuestFeed = () => {
  return useInfiniteQuery(QUERY_KEY.getGuestFeed, ({ pageParam = 0 }) => getGuestFeed(pageParam), {
    getNextPageParam: (lastPage) => {
      return lastPage.last ? undefined : lastPage.pageable.pageNumber + 1;
    },

    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
};

export default useGetGuestFeed;
