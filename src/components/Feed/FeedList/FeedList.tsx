import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { formatToTodayOrDate } from '../../../utils/dateUtils';
import FeedItem from '../FeedItem/FeedItem';
import { FeedListContainer } from './FeedList.style';

const FeedList = () => {
  const data = [
    {
      day: 20240318,
      data: [
        {
          id: 1,
          name: 'HI_JIN2',
          repository: 'YourSSU/YDSAndroid',
          image: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          category: 'pr',
          activityTitle: 'FEAT : 버튼 컴포넌트 개발',
          activitySubTitle: '나왜또버튼만들어',
          language: 'Kotlin',
        },
        {
          id: 2,
          name: 'JjungminLee',
          repository: 'EatSSU?EatSSUAndroid',
          image:
            'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg',
          category: 'commit',
          activityTitle: 'FEAT : 버튼 컴포넌트 개발',
          activitySubTitle: null,
          language: 'TypeScript',
        },
      ],
    },
    {
      day: 20240206,
      data: [
        {
          id: 3,
          name: 'HI_JIN2',
          repository: 'YourSSU/YDSAndroid',
          image: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          category: 'issue',
          activityTitle: 'FEAT : 버튼 컴포넌트 개발',
          activitySubTitle: '나왜또버튼만들어',
          language: null,
        },
      ],
    },
  ];

  return (
    <>
      {data.map((list) => (
        <FeedListContainer key={list.day}>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
            {formatToTodayOrDate(list.day)}
          </Txt>
          {list.data.map((item) => (
            <FeedItem
              key={item.id}
              id={item.id}
              name={item.name}
              repository={item.repository}
              image={item.image}
              category={item.category}
              activityTitle={item.activityTitle}
              activitySubTitle={item.activitySubTitle}
              language={item.language}
            />
          ))}
        </FeedListContainer>
      ))}
    </>
  );
};

export default FeedList;
