import styled from '@emotion/styled';
import { COLORS } from '../../../../constants/Color/Color';

export const GoalItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 2rem;
  gap: 1.5rem;
  border: 0.6px solid ${COLORS.baseColors.gray300};
  border-radius: 1rem;
`;
export const GoalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const GoalTitle = styled.div`
  display: flex;
  gap: 0.3rem;
`;
export const StartCircle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${COLORS.secondary.green};
`;
export const StartDate = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;
