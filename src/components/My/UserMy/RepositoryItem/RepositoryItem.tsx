import { IcChevronRight } from '../../../../assets';
import { COLORS } from '../../../../constants/Color/Color';
import Txt from '../../../../constants/Txt/Txt';

import { RepositoryInfo, RepositoryItemContainer, RepositoryTitle } from './RepositoryItem.style';

export interface RepositoryItemProps {
  repoName: string;
  description: string;
  url: string;
}
const RepositoryItem = (props: RepositoryItemProps) => {
  const { repoName, description, url } = props;

  const handleUrlClick = () => {
    window.location.href = url;
  };
  return (
    <RepositoryItemContainer>
      <RepositoryInfo>
        <RepositoryTitle>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P4">
            {repoName}
          </Txt>
          <button onClick={handleUrlClick}>
            <IcChevronRight />
          </button>
        </RepositoryTitle>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
          {description}
        </Txt>
      </RepositoryInfo>
    </RepositoryItemContainer>
  );
};

export default RepositoryItem;
