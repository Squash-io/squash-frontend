import * as styles from './RepositoryItem.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';

interface GoalRepositoryItemProps {
  id: number;
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

const GoalRepositoryItem = ({
  title,
  description,
  isSelected,
  onSelect,
}: GoalRepositoryItemProps) => {
  return (
    <styles.RepositoryContainer
      onClick={onSelect}
      color={isSelected ? COLORS.baseColors.gray050 : COLORS.baseColors.gray000}
    >
      <styles.RepositoryTitleContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P4">
          {title}
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
          {description}
        </Txt>
      </styles.RepositoryTitleContainer>
    </styles.RepositoryContainer>
  );
};

export default GoalRepositoryItem;
