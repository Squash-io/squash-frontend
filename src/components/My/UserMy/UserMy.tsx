import { useState } from 'react';
import { IcGoalAdd } from '../../../assets';
import NoGoalBanner from './Banner/NoGoalBanner';
import CategoryItem from './CategoryItem/CategoryItem';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import { CategoryList, IconBox, RepositoryList, UserMyContainer } from './UserMy.style';

const UserMy = () => {
  const [clickCategory, setClickCategory] = useState(0);
  const handleClickCategory = (index: number) => {
    setClickCategory(index);
  };
  const category = ['개인공부', '공모전', '유어슈', '우테코', '코테'];
  const data = [
    {
      category: '개인공부',
      data: [
        {
          id: 1,
          repositoryName: 'Jungmin Study',
          description: '개인공부레포',
          language: 'C',
        },
        {
          id: 2,
          repositoryName: 'Jungmin Java',
          description: '알고리즘 뿌셔버리고 싶다',
          language: 'Java',
        },
        {
          id: 3,
          repositoryName: 'TypeScript Master',
          description: '타입스크립트 마스터가 될테야',
          language: 'TypeScript',
        },
      ],
    },
    {
      category: '공모전',
      data: [
        {
          id: 4,
          repositoryName: 'TypeScript Master',
          description: '타입스크립트 마스터가 될테야',
          language: 'TypeScript',
        },
      ],
    },
  ];
  return (
    <UserMyContainer>
      <NoGoalBanner />
      <CategoryList>
        {category.map((item, index) => (
          <CategoryItem
            key={item}
            name={item}
            onClick={() => handleClickCategory(index)}
            isSelected={index == clickCategory}
          />
        ))}
      </CategoryList>
      <IconBox>
        <IcGoalAdd />
      </IconBox>
      <RepositoryList>
        {data.map(
          (list, index) =>
            index == clickCategory &&
            list.data.map((item) => (
              <RepositoryItem
                key={item.id}
                repoName={item.repositoryName}
                description={item.description}
                language={item.language}
              />
            ))
        )}
      </RepositoryList>
    </UserMyContainer>
  );
};

export default UserMy;
