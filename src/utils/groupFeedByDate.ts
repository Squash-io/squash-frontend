import { ContentItem } from '../apis/getFeed';

const groupFeedByDate = (content: ContentItem[]) => {
  const groupByDate: { [date: string]: ContentItem[] } = {};
  content.forEach((item) => {
    const date = item.time.split('T')[0].replace(/-/g, '');
    if (!groupByDate[date]) {
      groupByDate[date] = [];
    }
    groupByDate[date].push(item);
  });
  return groupByDate;
};

export default groupFeedByDate;
