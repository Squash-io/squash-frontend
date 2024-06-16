import { useQuery } from 'react-query';
import { getStreak } from '../apis/getStreak';

const QUERY_KEY = {
  getRepository: 'getStreak',
};
export const useGetStreak = () => {
  const repositoryData = useQuery([QUERY_KEY.getRepository], getStreak, {
    staleTime: 0, // 데이터를 항상 새로고침
    onError: (error) => {
      console.log('에러 발생', error);
    },
  });
  return repositoryData;
};

export default useGetStreak;
