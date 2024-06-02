import { customedAxios } from './customedAxios';
import api from '../service/TokenService';

const accessToken = api.getAccessToken();

export const postLike = async (data: PostLikeReq): Promise<PostLikeRes> => {
  const res = await customedAxios.post(
    `/members/friends/${data.friendId}/likes`,
    {},
    {
      params: {
        isLiked: data.isLiked,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res.data;
};
