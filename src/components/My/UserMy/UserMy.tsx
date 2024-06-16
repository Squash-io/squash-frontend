import { useEffect, useState } from 'react';
import { IcGoalAdd, IcFab } from '../../../assets';
import NoGoalBanner from './Banner/NoGoalBanner';
import CategoryItem from './CategoryItem/CategoryItem';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import {
  CategoryList,
  GoalList,
  IconBox,
  MyGoal,
  RepositoryList,
  UserMyContainer,
} from './UserMy.style';
import GoalItem from './Goal/GoalItem';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { useNavigate } from 'react-router-dom';
import { CategoryInterface, GetStreakInterface, RepositoryInterface } from '../../../types/My';
import useGetRepository from '../../../hooks/useGetRepository';
import useGetStreak from '../../../hooks/useGetStreak';

const UserMy = () => {
  const navigate = useNavigate();
  const { data } = useGetRepository();
  const { data: goalData } = useGetStreak();
  const [categories, setCategories] = useState<CategoryInterface[]>();
  const [repositories, setRepositories] = useState<RepositoryInterface[]>();
  const [goals, setGoals] = useState<GetStreakInterface>();
  const [clickCategory, setClickCategory] = useState(0);

  const handleClickCategory = (index: number) => {
    setClickCategory(index);
  };

  const handleCategoryAdd = () => {
    navigate('/my/category');
  };

  const handleGoalAdd = () => {
    navigate('/my/goal');
  };

  useEffect(() => {
    if (data) {
      const categoryData = data.map((item) => item.category);
      const repositoriesData = data.flatMap((item) => item);

      setCategories((prev) => [...(prev || []), ...categoryData]);
      setRepositories((prev) => [...(prev || []), ...repositoriesData]);
    }
    if (goalData) {
      setGoals(goalData);
    }
  }, [data, goalData]);

  const calculateStartDate = (commitLength: number) => {
    const today = new Date();
    today.setDate(today.getDate() - commitLength);
    return today.toLocaleDateString();
  };

  return (
    <UserMyContainer>
      <div onClick={handleGoalAdd}>
        <NoGoalBanner />
      </div>
      {categories && (
        <CategoryList>
          {categories.map((item, index) => (
            <CategoryItem
              key={item.id}
              name={item.name}
              onClick={() => handleClickCategory(index)}
              isSelected={index === clickCategory}
            />
          ))}
        </CategoryList>
      )}
      <IconBox onClick={handleCategoryAdd}>
        <IcGoalAdd />
      </IconBox>
      <RepositoryList>
        {repositories &&
          repositories.map(
            (repo, index) =>
              index === clickCategory &&
              repo.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  repoName={item.name}
                  description={item.description}
                  url={item.url}
                />
              ))
          )}
      </RepositoryList>

      <GoalList>
        <MyGoal>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
            내 목표
          </Txt>
          <button onClick={handleGoalAdd}>
            <IcFab />
          </button>
        </MyGoal>
        {goals && (
          <GoalItem
            key={goals.goalId + goals.goalName}
            goalTitle={goals.goalName}
            period={goals.commitLength + 1}
            startDate={calculateStartDate(goals.commitLength)}
            repository={goals.repositoryDto.url}
          />
        )}
      </GoalList>
    </UserMyContainer>
  );
};

export default UserMy;
