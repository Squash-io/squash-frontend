import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  margin: 1.6rem;
  cursor: pointer;
`;

export const ActivityListContainer = styled.div`
  display: flex;
  flex-direction: column;

  .date {
    margin-bottom: 0.4rem;
  }

  .date-line {
    margin-left: 1.2rem;
    height: 5rem;
    border-left: 0.05rem solid #96999d;
  }
`;
