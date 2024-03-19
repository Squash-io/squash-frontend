import styled from '@emotion/styled';

export const CommentHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const WriterBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const ProfileImage = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 2.8rem;
`;
export const CommentBox = styled.div<{ $id: number; $count?: number }>`
  margin-left: 1.3rem;
  padding-left: 2.3rem;
  padding-bottom: 2.7rem;
  border-left: ${({ $id, $count }) => ($id === $count ? 'none' : 'solid #A1A3A7 0.2rem')};
`;
