import styled from '@emotion/styled';

export const BannerContainer = styled.section`
  display: flex;
  gap: 0.9rem;
  padding: 0.6rem 1.1rem;
  margin: 3.2rem 1.6rem 1.6rem 1.6rem;
  width: 100%;
  height: 9.4rem;
  border-radius: 1.3rem;
  background: linear-gradient(268deg, #9da6fa 12.82%, #6ba4f9 96.34%);
  cursor: pointer;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 1.2rem;
`;

export const GoalShortCut = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
