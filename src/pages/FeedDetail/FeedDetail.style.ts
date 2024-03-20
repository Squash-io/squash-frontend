import styled from '@emotion/styled';

export const FeedDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.6rem;
  gap: 2.5rem;
  width: 100%;
  height: calc(100% - 10.2rem);
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CommitCotainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const CommentCotainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.9rem;
`;
