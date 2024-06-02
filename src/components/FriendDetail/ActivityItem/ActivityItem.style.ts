import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  display: flex;
  column-gap: 1.2rem;
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;

  .day-line {
    margin: auto;
    height: 100%;
    border-left: 0.05rem solid #96999d;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  align-items: center;
  width: 100%;
  row-gap: 0.8rem;
  padding: 0.4rem 0rem 2rem 0rem;
  box-sizing: content-box;

  .activityTitle {
    width: 90%;
  }
  .activitySubTitle {
    width: 100%;
  }
`;

export const RepositoryContainer = styled.div`
  display: flex;
  border: 0.1rem solid #eff1f4;
  border-radius: 0.5rem;
  align-items: center;
  padding: 0rem 0.4rem;
  column-gap: 0.4rem;

  .repositoryImg {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.2rem;
  }
`;
