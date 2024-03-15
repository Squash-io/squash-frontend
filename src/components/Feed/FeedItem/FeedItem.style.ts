import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';

export const FeedItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const InfoPicture = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 4.2rem;
`;
export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
