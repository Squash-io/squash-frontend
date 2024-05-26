import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 1.1rem;
  margin: 3.2rem 1.6rem 1.6rem 1.6rem;
  width: 100%;
  height: 9.4rem;
  border-radius: 1.3rem;
  background: linear-gradient(267deg, #ffe976 6.25%, #ff9f76 96.1%);
  cursor: pointer;
`;

export const BannerContent = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
`;

export const BannerText = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;

export const GoalShortCut = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
`;
