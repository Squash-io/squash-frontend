import * as styles from './RepositoryItem.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { useState } from 'react';
interface RepositoryItemInterface {
  id: number;
  title: string;
  description: string;
  selectRepoArray?: number[];
  setSelectRepoArray: React.Dispatch<React.SetStateAction<number[]>>;
}
const RepositoryItem = ({
  id,
  title,
  description,
  setSelectRepoArray,
}: RepositoryItemInterface) => {
  const [selectRepo, setSelectRepo] = useState(false);

  const toggleSelection = () => {
    setSelectRepo(!selectRepo);

    setSelectRepoArray((prev) => {
      const isAlreadySelected = prev.includes(id);
      if (isAlreadySelected) {
        return prev.filter((repoId) => repoId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <styles.RepositoryContainer
      onClick={toggleSelection}
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
