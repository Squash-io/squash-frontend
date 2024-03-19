import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { CommentInput, CommentRegContainer, RegButton } from './CommentReg.style';

const CommentReg = () => {
  return (
    <CommentRegContainer>
      <CommentInput placeholder="댓글을 남겨주세요" rows={3} />
      <RegButton type="button">
        <Txt color={COLORS.baseColors.gray000} textStyleName="P5">
          댓글 남기기
        </Txt>
      </RegButton>
    </CommentRegContainer>
  );
};

export default CommentReg;
