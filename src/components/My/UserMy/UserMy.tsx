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
  }, []);

  // const category = ['개인공부', '공모전', '유어슈', '우테코', '코테'];
  // const repository = [
  //   {
  //     category: '개인공부',
  //     data: [
  //       {
  //         id: 1,
  //         repositoryName: 'Jungmin Study',
  //         description: '개인공부레포',
  //         language: 'C',
  //       },
  //       {
  //         id: 2,
  //         repositoryName: 'Jungmin Java',
  //         description: '알고리즘 뿌셔버리고 싶다',
  //         language: 'Java',
  //       },
  //       {
  //         id: 3,
  //         repositoryName: 'TypeScript Master',
  //         description: '타입스크립트 마스터가 될테야',
  //         language: 'TypeScript',
  //       },
  //     ],
  //   },
  //   {
  //     category: '공모전',
  //     data: [
  //       {
  //         id: 4,
  //         repositoryName: 'BigdataCampus',
  //         description: '2021 서울특별시 빅데이터 캠퍼스 공모전',
  //         language: 'Python',
  //       },
  //       {
  //         id: 5,
  //         repositoryName: 'Onbid_OpenAPI',
  //         description: '온비드 OpenAPI를 사용한 공모전',
  //         language: 'Kotlin',
  //       },
  //     ],
  //   },
  //   {
  //     category: '유어슈',
  //     data: [
  //       {
  //         id: 6,
  //         repositoryName: 'YOURSSU_Assignment',
  //         description: '2023 유어슈 입부 과제',
  //         language: 'JavaScript',
  //       },
  //       {
  //         id: 7,
  //         repositoryName: 'YOURSSU-ts',
  //         description: '타입스크립트를 이용한 todo list 구현',
  //         language: 'TypeScript',
  //       },
  //     ],
  //   },
  //   {
  //     category: '우테코',
  //     data: [
  //       {
  //         id: 8,
  //         repositoryName: 'java-baseball-precourse',
  //         description: '우아한 테크코스 야구 프리코스',
  //         language: 'Java',
  //       },
  //     ],
  //   },
  //   {
  //     category: '코테',
  //     data: [
  //       {
  //         id: 9,
  //         repositoryName: 'programmers',
  //         description: '코테 뿌셔',
  //         language: 'JavaScript',
  //       },
  //     ],
  //   },
  // ];
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
