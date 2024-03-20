import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const FeedItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const ActivityContainer = styled.div`
  display: flex;
  gap: 1.7rem;
  padding: 1.6rem;
  align-items: center;
  height: 10rem;
  background-color: ${COLORS.baseColors.gray050};
  border-radius: 0.8rem;
`;
export const ActivityText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
`;
export const LanguageBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;
export const LanguageColor = styled.div<{ $language: string }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ $language }) =>
    COLORS.languageColors[$language as keyof typeof COLORS.languageColors]};
`;
