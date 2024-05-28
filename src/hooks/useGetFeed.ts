import { getFeed } from '../apis/getFeed';
import { useQuery } from 'react-query';

const QUERY_KEY = {
  getFeed: 'getFeed',
};
export const useGetFeed = (page: number) => {
  const data = useQuery(QUERY_KEY.getFeed, () => getFeed(page), {
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
  return data;
};

export default useGetFeed;
