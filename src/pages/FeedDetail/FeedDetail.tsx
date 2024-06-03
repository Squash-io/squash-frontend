import { useLocation } from 'react-router-dom';
import ProfileInfo from '../../components/@common/ProfileInfo/ProfileInfo';
import { CommentCotainer, CommitCotainer, FeedDetailContainer } from './FeedDetail.style';
import GithubShortCut from '../../components/FeedDetail/GithubShortCut/GithubShortCut';
import FeedTitle from '../../components/FeedDetail/FeedTitle/FeedTitle';
import CommitHistory from '../../components/FeedDetail/CommitHistory/CommitHistory';
import CommentHistory from '../../components/FeedDetail/CommentHistory/CommentHistory';
import CommentReg from '../../components/FeedDetail/CommentReg/CommentReg';
import useGetFeedDetail from '../../hooks/useGetFeedDetail';
import useGetComment from '../../hooks/useGetComment';

interface commentDataTypes {
  id: number;
  userName: string;
  memberId: number;
  comment: string;
  profileImageUrl: string;
}
const FeedDetail = () => {
  const location = useLocation();
  const { id } = location.state;
  const { data } = useGetFeedDetail(id);
  const commentData = useGetComment(id);
  if (!data || !commentData.data) {
    return <></>;
  }
  const timeToday = data.time.split('T')[0].replace(/-/g, '');
  return (
    <FeedDetailContainer>
      <ProfileInfo
        name={data.userName}
        repository={data.repoUrl.replace('https://github.com/', '').split('/commit/')[0]}
        image={data.profileImageUrl}
      />
      <FeedTitle
        title={data.commitMessages[data.commitMessages.length - 1].commitLog.slice(6)}
        day={timeToday}
        category={data.commitType}
      />
      <CommitCotainer>
        {data.commitMessages &&
          data.commitMessages.map((item) => (
            <CommitHistory
              category={data.commitType}
              key={item.id}
              commitMessage={item.commitLog.slice(6)}
            />
          ))}
      </CommitCotainer>
      <GithubShortCut githubUrl={data.repoUrl} />
      <CommentCotainer>
        {commentData.data.length > 0 &&
          commentData.data.map((item: commentDataTypes) => (
            <CommentHistory
              key={item.id}
              count={item.comment?.length}
              id={item.id}
              profile={item.profileImageUrl}
              writer={item.userName}
              comment={item.comment}
            />
          ))}
      </CommentCotainer>
      <CommentReg feedId={data.feedId} />
    </FeedDetailContainer>
  );
};

export default FeedDetail;
