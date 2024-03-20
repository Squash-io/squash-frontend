import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import {
  CommentBox,
  CommentHistoryContainer,
  ProfileImage,
  WriterBox,
} from './CommentHistory.style';

interface CommentProps {
  count?: number;
  id: number;
  profile: string;
  writer: string;
  comment: string;
}
const CommentHistory = (props: CommentProps) => {
  const { count, id, profile, writer, comment } = props;
  return (
    <CommentHistoryContainer>
      <WriterBox>
        <ProfileImage src={profile} />
        <Txt color={COLORS.baseColors.gray950} textStyleName="P4">
          {writer}
        </Txt>
      </WriterBox>
      <CommentBox $count={count} $id={id}>
        <Txt color={COLORS.baseColors.gray800} textStyleName="P4">
          {comment}
        </Txt>
      </CommentBox>
    </CommentHistoryContainer>
  );
};

export default CommentHistory;
