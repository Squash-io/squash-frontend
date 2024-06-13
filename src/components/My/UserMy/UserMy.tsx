import { useEffect, useState } from 'react';
import { IcGoalAdd } from '../../../assets';
import { IcFab } from '../../../assets';
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
import { CategoryInterface, RepositoryInterface } from '../../../types/My';
import useGetRepository from '../../../hooks/useGetRepository';

const UserMy = () => {
  const navigate = useNavigate();
  const { data } = useGetRepository();
  const [categories, setCategories] = useState<CategoryInterface[]>();
  const [repositories, setRepositories] = useState<RepositoryInterface[]>();
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

      // 기존 카테고리와 리포지터리 상태를 유지하며 새 데이터 추가
      setCategories((prev) => [...(prev || []), ...categoryData]);
      setRepositories((prev) => [...(prev || []), ...repositoriesData]);
    }
  }, [data]);

  const goal = [
    {
      id: 1,
      goalTitle: '알고리즘 1일 1커밋',
      period: 14,
      startDate: 20240211,
      repository: 'GDSCAlogrithm/JjungminCPP',
    },
    {
      id: 2,
      goalTitle: 'TIL',
      period: 150,
      startDate: 20231209,
      repository: 'TIL',
    },
  ];
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
              isSelected={index == clickCategory}
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
              index == clickCategory &&
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
        {goal.map((item) => (
          <GoalItem
            key={item.id}
            goalTitle={item.goalTitle}
            period={item.period}
            startDate={item.startDate}
            repository={item.repository}
          />
        ))}
      </GoalList>
    </UserMyContainer>
  );
};

export default UserMy;
