import styled from '@emotion/styled';
import { COLORS } from '../../../../constants/Color/Color';

export const RepositoryItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0.7rem 1.2rem 2rem;
  gap: 1.2rem;
  border: 0.6px solid ${COLORS.baseColors.gray300};
  border-radius: 1rem;
`;
export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RepositoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
