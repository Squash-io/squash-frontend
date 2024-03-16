import styled from '@emotion/styled';

export const FavoriteFriendItemContainer = styled.div`
  display: flex;
  column-gap: 2.4rem;
  align-items: center;
  word-break: break-all;

  img {
    width: 5.2rem;
    height: 5.2rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const FriendInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.5rem;
  width: 100%;

  .user-description {
    width: 100%;
  }
`;
