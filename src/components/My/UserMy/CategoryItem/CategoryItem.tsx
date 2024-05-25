import { COLORS } from '../../../../constants/Color/Color';
import Txt from '../../../../constants/Txt/Txt';
import { Item } from './CategoryItem.style';

export interface CategortProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}
const CategoryItem = (props: CategortProps) => {
  const { name, onClick, isSelected } = props;
  return (
    <Item onClick={onClick} $isSelected={isSelected}>
      <Txt color={COLORS.baseColors.gray950} textStyleName="P6">
        {name}
      </Txt>
    </Item>
  );
};

export default CategoryItem;
