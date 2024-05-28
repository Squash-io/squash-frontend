import * as styles from './CreateGoal.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import { useNavigate } from 'react-router-dom';
const CreateGoal = () => {
  const navigate = useNavigate();
  const handleConfirmClick = () => {
    navigate('/my');
  };
  return (
    <styles.CreateGoalContainer>
      <styles.CreateGoalInputContainer>
        <styles.CreateGoalInput placeholder="목표를 입력해주세요" />
        <styles.CreateGoalInputBorderLine />
      </styles.CreateGoalInputContainer>
      <styles.SelectRepositoryContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P3">
          레포지토리를 선택해주세요
        </Txt>
        <Txt color={COLORS.baseColors.gray400} textStyleName="P6">
          내 목표와 연동되는 레포지토리를 선택해주세요
        </Txt>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </styles.SelectRepositoryContainer>
      <styles.ConfirmButton onClick={handleConfirmClick}>
        <Txt color={COLORS.baseColors.gray000} textStyleName="B2">
          확인
        </Txt>
      </styles.ConfirmButton>
    </styles.CreateGoalContainer>
  );
};
export default CreateGoal;
