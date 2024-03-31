import { customedAxios } from './customedAxios';

const postLogin = async (data: PostAuthReq): Promise<PostAuthRes> => {
  const res = await customedAxios.post('/auth', data);
  return res.data;
};
export default postLogin;
