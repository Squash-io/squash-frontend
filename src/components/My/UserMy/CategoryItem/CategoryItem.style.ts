import styled from '@emotion/styled';

export const Item = styled.li<{ $isSelected: boolean }>`
  display: flex;
  padding: 0.3rem 1.3rem;
  border-radius: 0.8rem;
  border: 0.4px solid var(--Gray300, #c1c3c6);
  cursor: pointer;
`;
