import { useState } from 'react';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { CommentInput, CommentRegContainer, RegButton } from './CommentReg.style';
import usePostComment from '../../../hooks/usePostComment';

interface CommentRegProps {
  feedId: number;
}
const CommentReg = (props: CommentRegProps) => {
  const { feedId } = props;
  const [comment, setComment] = useState('');
  const { mutate } = usePostComment();
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate({ feedId, content: comment });
    setComment('');
  };
  return (
    <CommentRegContainer>
      <CommentInput placeholder="댓글을 남겨주세요." rows={1} onChange={handleInputChange} />
      <RegButton type="button" onClick={handleButtonClick}>
        <Txt color={COLORS.baseColors.gray000} textStyleName="P5">
          댓글 남기기
        </Txt>
      </RegButton>
    </CommentRegContainer>
  );
};

export default CommentReg;
