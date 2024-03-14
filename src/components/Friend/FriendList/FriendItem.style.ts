import styled from '@emotion/styled';

export const ItemContainer = styled.section`
  display: flex;
  align-items: center;
  word-break: break-all;

  &:not(:last-of-type) {
    margin-bottom: 2.4rem;
  }

  img {
    width: 5.2rem;
    height: 5.2rem;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 2.4rem;
  }

  .btn-star {
    min-width: 3rem;
    min-height: 3rem;
    margin-left: auto;
    box-sizing: content-box;
    padding-left: 0.8rem;
  }
`;
