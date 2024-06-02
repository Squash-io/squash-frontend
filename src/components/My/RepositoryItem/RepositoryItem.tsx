import * as styles from './RepositoryItem.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { useState } from 'react';
interface RepositoryItemInterface {
  id?: number;
  title: string;
  description: string;
}
const RepositoryItem = ({ id, title, description }: RepositoryItemInterface) => {
  const [selectRepo, setSelectRepo] = useState(false);
  return (
    <styles.RepositoryContainer
      onClick={() => {
        setSelectRepo(!selectRepo);
      }}
      color={selectRepo ? COLORS.baseColors.gray050 : COLORS.baseColors.gray000}
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
export default RepositoryItem;
