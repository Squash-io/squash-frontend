import { customedAxios } from './customedAxios';
import api from '../service/TokenService';
import { PostStreakReq } from '../types/My';
const postStreak = async (data: PostStreakReq): Promise<any> => {
  const res = await customedAxios.post(
    '/members/repository/streak',
    {
      name: data.name,
      repositoryId: data.repositoryId,
    },
    {
      headers: {
        Authorization: `Bearer ${api.getAccessToken()}`,
      },
    }
  );
  return res.data;
};
export default postStreak;
