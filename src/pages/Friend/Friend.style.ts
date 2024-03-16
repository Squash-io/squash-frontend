import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  overflow-y: scroll;

  // 스크롤 바 안 생기게
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
