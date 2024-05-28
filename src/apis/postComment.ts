import api from '../service/TokenService';
import { customedAxios } from './customedAxios';

const postComment = async (feedId: number, content: string) => {
  const { data } = await customedAxios.post(
    `/feeds/comments/${feedId}`,
    {
      content: content,
    },
    {
      headers: {
        Authorization: `Bearer ${api.getAccessToken()}`,
      },
    }
  );
  return data;
};

export default postComment;
