import { useQuery } from 'react-query';
import getComment from '../apis/getComment';

const QUERY_KEY = {
  getComment: 'getComment',
};
export const useGetComment = (feedId: number) => {
  const commentData = useQuery([QUERY_KEY], () => getComment(feedId), {
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
  return commentData;
};

export default useGetComment;
