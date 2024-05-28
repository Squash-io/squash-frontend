import { IcCommit } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { CommitHistoryBox, TextBox } from './CommitHistory.style';

interface CommitHistoryProps {
  commitMessage: string;
  category: string;
}
const CommitHistory = (props: CommitHistoryProps) => {
  const { commitMessage } = props;
  return (
    <CommitHistoryBox>
      <IcCommit />
      <TextBox>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P4">
          {commitMessage}
        </Txt>
      </TextBox>
    </CommitHistoryBox>
  );
};

export default CommitHistory;
