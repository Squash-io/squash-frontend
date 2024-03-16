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
