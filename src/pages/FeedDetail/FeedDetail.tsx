import { useLocation } from 'react-router-dom';
import ProfileInfo from '../../components/@common/ProfileInfo/ProfileInfo';
import { FeedDetailContainer, HistoryCotainer } from './FeedDetail.style';
import GithubShortCut from '../../components/FeedDetail/GithubShortCut/GithubShortCut';
import FeedTitle from '../../components/FeedDetail/FeedTitle/FeedTitle';
import CommitHistory from '../../components/FeedDetail/CommitHistory/CommitHistory';

const FeedDetail = () => {
  const data = [
    {
      id: 1,
      name: 'HI_JIN2',
      repository: 'YourSSU/YDSAndroid',
      image: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      category: 'pr',
      title: 'FEAT : 버튼 컴포넌트 개발',
      day: 20240318,
      commit: ['FIX : Merge Conflict', 'FEAT : 버튼 컴포넌트 구현'],
    },
    {
      id: 2,
      name: 'JjungminLee',
      repository: 'EatSSU?EatSSUAndroid',
      image:
        'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg',
      category: 'commit',
      title: 'FEAT : 버튼 컴포넌트 개발',
      day: 20240318,
    },
    {
      id: 3,
      name: 'HI_JIN2',
      repository: 'YourSSU/YDSAndroid',
      image: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      category: 'issue',
      title: 'FEAT : 버튼 컴포넌트 개발',
      day: 20240206,
      relatedPr: 'Feat : 컬러토큰 추가',
      commit: ['FIX : Merge Conflict', 'Feat : 버튼 컴포넌트 구현'],
    },
  ];
  //통신시 id 이용해서 통신할 예정
  const location = useLocation();
  const { id } = location.state;
  const feed = data.filter((item) => item.id === id);

  return (
    <FeedDetailContainer>
      <ProfileInfo name={feed[0].name} repository={feed[0].repository} image={feed[0].image} />
      <FeedTitle title={feed[0].title} day={feed[0].day} category={feed[0].category} />
      <HistoryCotainer>
        {feed[0].relatedPr && <CommitHistory relatedPr={feed[0].relatedPr} />}
        {feed[0].commit &&
          feed[0].commit.map((item) => <CommitHistory key={item} commitMessage={item} />)}
      </HistoryCotainer>
      <GithubShortCut />
    </FeedDetailContainer>
  );
};

export default FeedDetail;
