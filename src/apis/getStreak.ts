import { customedAxios } from './customedAxios';
import api from '../service/TokenService';
import { GetStreakRes } from '../types/My';

export const getStreak = async (): Promise<GetStreakRes> => {
  const res = await customedAxios.get('/members/repository/streak', {
    headers: {
      Authorization: `Bearer ${api.getAccessToken()}`,
    },
  });
  return res.data;
};
