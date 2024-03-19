import { IcCommit } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
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
        <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
          {commitMessage}
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
          {day}
        </Txt>
      </CommitMessageBox>
    </CommitContainer>
  );
};

export default Commit;
