import styled from '@emotion/styled';

export const FriendItemContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  column-gap: 2.4rem;

  img {
    width: 5.2rem;
    height: 5.2rem;
    object-fit: cover;
    border-radius: 50%;
  }

  .btn-favorite {
    margin-left: auto;
    box-sizing: content-box;
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
