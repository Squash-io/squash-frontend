import { useLocation } from 'react-router-dom';
import ProfileInfo from '../../components/@common/ProfileInfo/ProfileInfo';
import { FeedDetailContainer } from './FeedDetail.style';
import Commit from '../../components/FeedDetail/Commit/Commit';
import GithubShortCut from '../../components/FeedDetail/GithubShortCut/GithubShortCut';
import Pr from '../../components/FeedDetail/Pr/Pr';
import Issue from '../../components/FeedDetail/Issue/Issue';

const FeedDetail = () => {
  const data = [
    {
      id: 1,
      name: 'HI_JIN2',
      repository: 'YourSSU/YDSAndroid',
      image: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      category: 'pr',
      prTitle: 'FEAT : 버튼 컴포넌트 개발',
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
      commitMessage: 'FEAT : 버튼 컴포넌트 개발',
      day: 20240318,
    },
    {
      id: 3,
      name: 'HI_JIN2',
      repository: 'YourSSU/YDSAndroid',
      image: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      category: 'issue',
      issueTitle: 'FEAT : 버튼 컴포넌트 개발',
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
      {feed[0].category === 'commit' && (
        <Commit commitMessage={feed[0].commitMessage} day={feed[0].day} />
      )}
      {feed[0].category === 'pr' && (
        <Pr prTitle={feed[0].prTitle} day={feed[0].day} commit={feed[0].commit} />
      )}
      {feed[0].category === 'issue' && (
        <Issue
          issueTitle={feed[0].issueTitle}
          day={feed[0].day}
          commit={feed[0].commit}
          relatedPr={feed[0].relatedPr}
        />
      )}
      <GithubShortCut />
    </FeedDetailContainer>
  );
};

export default FeedDetail;
