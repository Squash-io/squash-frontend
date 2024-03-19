import { IcCommit } from '../../../assets';
import FeedTitle from '../FeedTitle/FeedTitle';
import { CommitContainer, CommitMessageBox } from './Commit.style';

interface CommitProps {
  commitMessage?: string;
  day: number;
}
const Commit = (props: CommitProps) => {
  const { commitMessage, day } = props;
  return (
    <CommitContainer>
      <IcCommit />
      <CommitMessageBox>
        <FeedTitle title={commitMessage} day={day} />
      </CommitMessageBox>
    </CommitContainer>
  );
};

export default Commit;
