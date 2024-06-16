import * as styles from './CreateGoal.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { useNavigate } from 'react-router-dom';
import useGetRepository from '../../../hooks/useGetRepository';
import { useEffect, useState } from 'react';
import { PostStreakReq, RespositoriesInteface } from '../../../types/My';
import postStreak from '../../../apis/postStreak';
import GoalRepositoryItem from '../RepositoryItem/GoalRepositoryItem';

const CreateGoal = () => {
  const navigate = useNavigate();
  const { data } = useGetRepository();
  const [name, setName] = useState('');
  const [repositories, setRepositories] = useState<RespositoriesInteface[]>();
  const [selectedRepoId, setSelectedRepoId] = useState<number | null>(null);

  const handleConfirmClick = async () => {
    if (selectedRepoId) {
      const postData: PostStreakReq = {
        name: name,
        repositoryId: selectedRepoId,
      };
      await postStreak(postData);
      navigate('/my');
    } else {
      alert('레포지토리를 선택해주세요.');
    }
  };

  useEffect(() => {
    if (data) {
      const repositoriesData = data.flatMap((item) => item.repositories);
      setRepositories(repositoriesData);
    }
  }, [data]);

  return (
    <styles.CreateGoalContainer>
      <styles.CreateGoalInputContainer>
        <styles.CreateGoalInput
          placeholder="목표를 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
              <GoalRepositoryItem
                key={item.id}
                title={item.name}
                description={item.description}
                id={item.id}
                isSelected={item.id === selectedRepoId}
                onSelect={() => setSelectedRepoId(item.id)}
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
