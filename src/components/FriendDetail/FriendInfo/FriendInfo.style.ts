import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  column-gap: 2.4rem;
  align-items: center;
  word-break: break-all;
  margin: 2.4rem 1.6rem;
  cursor: pointer;

  img {
    width: 5.2rem;
    height: 5.2rem;
    object-fit: cover;
    border-radius: 50%;
  }
  .ic-star {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const FriendInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.5rem;
  align-items: center;
  width: 100%;

  .user-description {
    width: 100%;
  }
`;
