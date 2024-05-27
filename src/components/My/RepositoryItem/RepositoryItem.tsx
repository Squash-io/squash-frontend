import * as styles from './RepositoryItem.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import { useState } from 'react';

const RepositoryItem = () => {
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
          JjungminLee/TypeScript Master
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
          타입스크립트 마스터가 될테야!
        </Txt>
      </styles.RepositoryTitleContainer>
      <styles.LanguageContainer>
        <styles.LanguageCircle color={COLORS.languageColors.TypeScript} />
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
          Typescript
        </Txt>
      </styles.LanguageContainer>
    </styles.RepositoryContainer>
  );
};
export default RepositoryItem;
