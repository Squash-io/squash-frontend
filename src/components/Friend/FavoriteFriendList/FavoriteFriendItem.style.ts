import styled from '@emotion/styled';

export const ItemContainer = styled.section`
  display: flex;
  margin-bottom: 2.4rem;
  word-break: break-all;

  img {
    width: 5.2rem;
    height: 5.2rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const UserInfoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 2.4rem;

  .user-id {
    margin-right: 0.8rem;
  }

  .user-description {
    width: 100%;
  }
`;
