import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const GithubShortCutContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: solid ${COLORS.baseColors.gray400} 0.1rem;
`;
export const ShortCutButtonContainer = styled.button`
  display: flex;
  gap: 0.2rem;
`;
