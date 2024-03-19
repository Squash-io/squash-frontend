import { IcAlertCircle } from '../../../assets';
import CommitHistory from '../CommitHistory/CommitHistory';
import FeedTitle from '../FeedTitle/FeedTitle';
import { HistoryCotainer, IssueContainer } from './Issue.style';

interface IssueProps {
  issueTitle?: string;
  day: number;
  commit?: string[];
  relatedPr?: string;
}
const Issue = (props: IssueProps) => {
  const { issueTitle, day, commit, relatedPr } = props;
  return (
    <>
      <IssueContainer>
        <IcAlertCircle />
        <FeedTitle title={issueTitle} day={day} />
      </IssueContainer>
      <HistoryCotainer>
        <CommitHistory relatedPr={relatedPr} />
        {commit?.map((item) => (
          <CommitHistory key={item} commitMessage={item} />
        ))}
      </HistoryCotainer>
    </>
  );
};

export default Issue;
