import { useMutation } from 'react-query';
import postComment from '../apis/postComment';

export const usePostComment = () => {
  return useMutation(
    (data: { feedId: number; content: string }) => postComment(data.feedId, data.content),
    {
      onError: (error) => {
        console.log('에러 발생', error);
      },
    }
  );
};

export default usePostComment;
