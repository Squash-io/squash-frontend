import { customedAxios } from './customedAxios';
import api from '../service/TokenService';
import { PostMemberRepositoryReq } from '../types/My';
const postRepository = async (data: PostMemberRepositoryReq): Promise<any> => {
  const res = await customedAxios.post(
    '/members/repository',
    {
      name: data.name,
      repositoryIds: data.repositoriyIds,
    },
    {
      headers: {
        Authorization: `Bearer ${api.getAccessToken()}`,
      },
    }
  );
  return res.data;
};
export default postRepository;
