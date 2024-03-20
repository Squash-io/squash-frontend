import { IcCommit, IcPullRequest } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { CommitHistoryBox } from './CommitHistory.style';

interface CommitHistoryProps {
  commitMessage?: string;
  relatedPr?: string;
}
const CommitHistory = (props: CommitHistoryProps) => {
  const { commitMessage, relatedPr } = props;
  return (
    <CommitHistoryBox>
      {relatedPr ? <IcPullRequest /> : <IcCommit />}
      <Txt color={COLORS.baseColors.gray500} textStyleName="P4">
        {relatedPr}
        {commitMessage}
      </Txt>
    </CommitHistoryBox>
  );
};

export default CommitHistory;
