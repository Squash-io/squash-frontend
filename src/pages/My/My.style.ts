import styled from '@emotion/styled';

export const MyContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
