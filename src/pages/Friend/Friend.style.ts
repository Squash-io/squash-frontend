import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FriendContainer = styled.div`
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
