import { customedAxios } from './customedAxios';

export const getFriendDetail = async (friendId: number): Promise<FriendDetailRes[]> => {
  const res = await customedAxios.get(`/members/feeds/${friendId}`);
  return res.data;
};
