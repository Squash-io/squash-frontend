import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

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
  row-gap: 0.6rem;
  padding: 0.4rem 0rem 1.6rem 0rem;
  box-sizing: content-box;

  .activityTitle {
    width: 100%;
  }
  .activitySubTitle {
    width: 100%;
  }
`;

export const RepoLangContainer = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
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

export const LanguageContainer = styled.div`
  display: flex;
  column-gap: 0.4rem;
  align-items: center;
`;

export const LanguageColor = styled.div<{ $language: string }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ $language }) =>
    COLORS.languageColors[$language as keyof typeof COLORS.languageColors]};
`;
