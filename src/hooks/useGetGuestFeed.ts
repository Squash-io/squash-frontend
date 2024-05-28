import { getGuestFeed } from '../apis/getGuestFeed';
import { useQuery } from 'react-query';

const QUERY_KEY = {
  getGuestFeed: 'getGuestFeed',
};
export const useGetGuestFeed = (page: number) => {
  const data = useQuery(QUERY_KEY.getGuestFeed, () => getGuestFeed(page), {
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
  return data;
};

export default useGetGuestFeed;
