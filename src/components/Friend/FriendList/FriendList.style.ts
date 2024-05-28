import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 2.4rem 1.6rem 0.8rem 1.6rem;

  .btn-toggle {
    margin-left: auto;
  }
`;

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  margin: 1.6rem;

  overflow-y: scroll;

  // 스크롤 바 안 생기게
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
