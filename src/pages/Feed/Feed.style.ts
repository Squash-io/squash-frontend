import styled from '@emotion/styled';

export const FeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 4rem;
`;

export const FeedBox = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100% - 21rem);
  overflow-y: scroll;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
