import styled from '@emotion/styled';

export const FriendDetailContainer = styled.section`
  width: 100%;
  height: calc(100% - 12rem);
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  // 스크롤 바 안 생기게
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
