import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const UserMyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const CategoryList = styled.ul`
  display: flex;
  margin: 3rem 1.6rem;
  padding-right: 10rem;
  gap: 2.8rem;
  width: 100%;
  white-space: nowrap;
`;
export const IconBox = styled.div`
  position: absolute;
  top: 18.6rem;
  right: 0;
  transform: translateY(-50%);
  background-color: ${COLORS.baseColors.gray000};
  cursor: pointer;
`;
export const RepositoryList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
  gap: 1.3rem;
`;
export const GoalList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 4.3rem 1.6rem;
  padding-bottom: 20rem;
  gap: 1.3rem;
`;
export const MyGoal = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
