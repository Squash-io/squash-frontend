import { customedAxios } from './customedAxios';

const getComment = async (feedId: number) => {
  const { data } = await customedAxios.get(`feeds/comments/${feedId}`);

  return data;
};

export default getComment;
