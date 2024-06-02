import { customedAxios } from './customedAxios';
import api from '../service/TokenService';

export const getFriendList = async (): Promise<FriendListRes> => {
  const res = await customedAxios.get('/members/friends', {
    headers: {
      Authorization: `Bearer ${api.getAccessToken()}`,
    },
  });
  return res.data;
};
