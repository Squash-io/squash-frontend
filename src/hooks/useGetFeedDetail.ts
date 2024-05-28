import { useQuery } from 'react-query';
import getFeedDetail from '../apis/getFeedDetail';

const QUERY_KEY = {
  getFeedDetail: 'getFeedDetail',
};
export const useGetFeedDetail = (feedId: number) => {
  const data = useQuery(QUERY_KEY.getFeedDetail, () => getFeedDetail(feedId), {
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
  return data;
};

export default useGetFeedDetail;
