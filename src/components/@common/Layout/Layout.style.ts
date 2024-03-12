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
  width: 100vw;
  max-width: 43rem;
  height: 100vh;
  background-color: white;
`;
