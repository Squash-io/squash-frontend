import * as styles from './CreateGoal.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import { useNavigate } from 'react-router-dom';
import useGetRepository from '../../../hooks/useGetRepository';
import { useEffect } from 'react';
import { useState } from 'react';
import { RespositoriesInteface } from '../../../types/My';
const CreateGoal = () => {
  const navigate = useNavigate();
  const { data } = useGetRepository();

  const [repositories, setRepositories] = useState<RespositoriesInteface[]>();
  const handleConfirmClick = () => {
    navigate('/my');
  };
  useEffect(() => {
    if (data) {
      const repositoriesData = data.flatMap((item) => item.repositories);

      setRepositories((prev) => [...(prev || []), ...repositoriesData]);
    }
  }, [data]);
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
        {repositories &&
          repositories
            .slice(0, 4)
            .map((item) => (
              <RepositoryItem
                key={item.id}
                title={item.name}
                description={item.description}
                id={item.id}
              />
            ))}
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
