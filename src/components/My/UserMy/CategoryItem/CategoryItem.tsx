import { COLORS } from '../../../../constants/Color/Color';
import Txt from '../../../../constants/Txt/Txt';
import { Item } from './CategoryItem.style';

export interface CategortProps {
  name: string;
}
const CategoryItem = (props: CategortProps) => {
  const { name } = props;
  return (
    <Item>
      <Txt color={COLORS.baseColors.gray950} textStyleName="P6">
        {name}
      </Txt>
    </Item>
  );
};

export default CategoryItem;
