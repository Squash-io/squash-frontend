import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const CommitHistoryBox = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  border: solid 0.08rem ${COLORS.baseColors.gray100};
`;
export const TextBox = styled.div`
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;
