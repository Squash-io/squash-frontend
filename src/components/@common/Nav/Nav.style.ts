import styled from '@emotion/styled';

export const NavContainer = styled.section`
  display: flex;
  padding: 1.6rem 4rem;
`;
export const NavItem = styled.button<{ $selected: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  border-bottom: ${({ $selected }) => ($selected ? 'solid 0.3rem' : 'none')};
`;
