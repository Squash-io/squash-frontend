import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.baseColors.gray100};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisplayWrapper = styled.section`
  min-width: 60rem;
  max-width: auto;
  height: 100vh;
  background-color: white;
`;
