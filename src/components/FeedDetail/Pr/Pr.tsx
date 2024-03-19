import { IcPullRequest } from '../../../assets';
import CommitHistory from '../CommitHistory/CommitHistory';
import FeedTitle from '../FeedTitle/FeedTitle';
import { HistoryCotainer, PrContainer } from './Pr.style';

interface PrProps {
  prTitle?: string;
  day: number;
  commit?: string[];
}
const Pr = (props: PrProps) => {
  const { prTitle, day, commit } = props;
  return (
    <>
      <PrContainer>
        <IcPullRequest />
        <FeedTitle title={prTitle} day={day} />
      </PrContainer>
      <HistoryCotainer>
        {commit?.map((item) => (
          <CommitHistory key={item} commitMessage={item} />
        ))}
      </HistoryCotainer>
    </>
  );
};

export default Pr;
