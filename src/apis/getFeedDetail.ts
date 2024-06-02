import { customedAxios } from './customedAxios';
import { ContentItem } from './getFeed';

const getFeedDetail = async (feedId: number) => {
  const { data } = await customedAxios.get<ContentItem>(`/feeds/${feedId}`);
  return data;
};

export default getFeedDetail;
