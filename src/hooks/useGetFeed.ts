import { getFeed } from '../apis/getFeed';
import { useInfiniteQuery } from 'react-query';

const QUERY_KEY = {
  getFeed: 'getFeed',
};
export const useGetFeed = () => {
  return useInfiniteQuery(QUERY_KEY.getFeed, ({ pageParam = 0 }) => getFeed(pageParam), {
    getNextPageParam: (lastPage) => {
      return lastPage.last ? undefined : lastPage.pageable.pageNumber + 1;
    },
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
};

export default useGetFeed;
