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
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const IconBox = styled.div`
  position: absolute;
  top: 18.5rem;
  right: 0;
  transform: translateY(-50%);
  background-color: ${COLORS.baseColors.gray000};
  cursor: pointer;
`;
