import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const CommentRegContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.2rem;
  margin-bottom: 10rem;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  padding: 3.3rem 1.3rem;
  border-radius: 1.2rem;
  border: solid 0.1rem ${COLORS.baseColors.gray400};
  ::placeholder {
    font-size: 1rem;
    color: ${COLORS.baseColors.gray400};
  }
`;
export const RegButton = styled.button`
  padding: 0.7rem 3.6rem;
  border-radius: 0.4rem;
  background-color: ${COLORS.primary.purple300};
`;
