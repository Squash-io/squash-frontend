import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const RepositoryContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border: 0.6px solid ${COLORS.baseColors.gray500};
  border-radius: 8px;
  gap: 1.2rem;
  background-color: ${(props) => props.color || 'transparent'};
`;

export const RepositoryTitleContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const LanguageContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;
export const LanguageCircle = styled.div`
  border-radius: 50%;
  width: 9px;
  height: 9px;
  background-color: ${(props) => props.color};
`;
