import { customedAxios } from './customedAxios';
import api from '../service/TokenService';
import { GetMemberReposiotryRes } from '../types/My';

const accessToken = api.getAccessToken();

export const getRepository = async (): Promise<GetMemberReposiotryRes> => {
  const res = await customedAxios.get('/members/repository', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};
