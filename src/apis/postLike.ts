import { customedAxios } from './customedAxios';
import api from '../service/TokenService';

export const postLike = async (data: PostLikeReq): Promise<PostLikeRes> => {
  const res = await customedAxios.post(
    `/members/friends/${data.friendId}/likes`,
    {},
    {
      params: {
        isLiked: data.isLiked,
      },
      headers: {
        Authorization: `Bearer ${api.getAccessToken()}`,
      },
    }
  );
  return { status: res.status };
};
