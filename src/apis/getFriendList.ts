import { customedAxios } from './customedAxios';
import api from '../service/TokenService';

const accessToken = api.getAccessToken();

export const getFriendList = async (data: FriendListReq): Promise<FriendListRes> => {
  const res = await customedAxios.get('/members/friends', {
    params: {
      page: data.page,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};
