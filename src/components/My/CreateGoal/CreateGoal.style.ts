import styled from '@emotion/styled';
import { COLORS } from '../../../constants/Color/Color';
export const CreateGoalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 6rem;
  width: 100%;
  height: calc(100vh - 14rem);
  padding-left: 2rem;
  padding-right: 2rem;
  overflow-y: auto;
`;

export const CreateGoalInputContainer = styled.article`
  gap: 0.4rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CreateGoalInput = styled.input`
  border: none;
  input::placeholder {
    color: ${COLORS.baseColors.gray500};
  }
  input::-webkit-input-placeholder {
    color: ${COLORS.baseColors.gray500};
  }
  input:-ms-input-placeholder {
    color: ${COLORS.baseColors.gray500};
  }
`;

export const CreateGoalInputBorderLine = styled.div`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1.6px solid ${COLORS.baseColors.gray800};
`;

export const SelectRepositoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ConfirmButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${COLORS.primary.purple400};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
`;
