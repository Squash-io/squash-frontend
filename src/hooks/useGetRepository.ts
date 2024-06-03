import { useQuery } from 'react-query';
import { getRepository } from '../apis/getRepository';

const QUERY_KEY = {
  getRepository: 'getRepository',
};
export const useGetRepository = () => {
  const repositoryData = useQuery([QUERY_KEY.getRepository], getRepository, {
    staleTime: 0, // 데이터를 항상 새로고침
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
  return repositoryData;
};

export default useGetRepository;
