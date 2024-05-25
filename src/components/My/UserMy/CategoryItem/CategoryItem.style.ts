import styled from '@emotion/styled';
import { COLORS } from '../../../../constants/Color/Color';

export const Item = styled.li<{ $isSelected: boolean }>`
  display: flex;
  padding: 0.3rem 1.3rem;
  border-radius: 0.8rem;
  border: 0.4px solid ${COLORS.baseColors.gray300};
  background-color: ${(props) => props.$isSelected && COLORS.secondary.green};
  cursor: pointer;
`;
