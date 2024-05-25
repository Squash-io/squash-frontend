import styled from '@emotion/styled';

export const FeedContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 15rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
