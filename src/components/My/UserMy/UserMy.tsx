import { IcGoalAdd } from '../../../assets';
import NoGoalBanner from './Banner/NoGoalBanner';
import CategoryItem from './CategoryItem/CategoryItem';
import { CategoryList, IconBox, UserMyContainer } from './UserMy.style';

const UserMy = () => {
  const category = ['개인공부', '공모전', '유어슈', '우테코', '코테', 'ㅇㅇ'];
  return (
    <UserMyContainer>
      <NoGoalBanner />
      <CategoryList>
        {category.map((item) => (
          <CategoryItem key={item} name={item} />
        ))}
      </CategoryList>
      <IconBox>
        <IcGoalAdd />
      </IconBox>
    </UserMyContainer>
  );
};

export default UserMy;
