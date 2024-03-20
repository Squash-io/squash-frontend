import { useLocation } from 'react-router-dom';
import ProfileInfo from '../../components/@common/ProfileInfo/ProfileInfo';
import { CommentCotainer, CommitCotainer, FeedDetailContainer } from './FeedDetail.style';
import GithubShortCut from '../../components/FeedDetail/GithubShortCut/GithubShortCut';
import FeedTitle from '../../components/FeedDetail/FeedTitle/FeedTitle';
import CommitHistory from '../../components/FeedDetail/CommitHistory/CommitHistory';
import CommentHistory from '../../components/FeedDetail/CommentHistory/CommentHistory';
import CommentReg from '../../components/FeedDetail/CommentReg/CommentReg';

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
      comment: [
        {
          id: 1,
          writer: 'jungminLee',
          profile:
            'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg',
          comment: '헐',
        },
        {
          id: 2,
          writer: 'jungminLee',
          profile:
            'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg',
          comment: '넘 잘했다',
        },
      ],
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
      comment: [
        {
          id: 1,
          writer: 'jungminLee',
          profile:
            'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg',
          comment: '굿입니당!',
        },
        {
          id: 2,
          writer: 'HI_JIN2',
          profile: 'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          comment: 'pr 올릴게??',
        },
        {
          id: 3,
          writer: 'jungminLee',
          profile:
            'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg',
          comment: '오켕',
        },
      ],
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
      <CommitCotainer>
        {feed[0].relatedPr && <CommitHistory relatedPr={feed[0].relatedPr} />}
        {feed[0].commit &&
          feed[0].commit.map((item) => <CommitHistory key={item} commitMessage={item} />)}
      </CommitCotainer>
      <GithubShortCut />
      <CommentCotainer>
        {feed[0].comment?.map((item) => (
          <CommentHistory
            key={item.id}
            count={feed[0].comment?.length}
            id={item.id}
            profile={item.profile}
            writer={item.writer}
            comment={item.comment}
          />
        ))}
      </CommentCotainer>
      <CommentReg />
    </FeedDetailContainer>
  );
};

export default FeedDetail;
