import { IcChevronRight } from '../../../../assets';
import { COLORS } from '../../../../constants/Color/Color';
import Txt from '../../../../constants/Txt/Txt';
import { LanguageBox, LanguageColor } from '../../../Feed/FeedItem/FeedItem.style';
import { RepositoryInfo, RepositoryItemContainer, RepositoryTitle } from './RepositoryItem.style';

export interface RepositoryItemProps {
  repoName: string;
  description: string;
  language: string;
}
const RepositoryItem = (props: RepositoryItemProps) => {
  const { repoName, description, language } = props;
  return (
    <RepositoryItemContainer>
      <RepositoryInfo>
        <RepositoryTitle>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P4">
            {repoName}
          </Txt>
          <IcChevronRight />
        </RepositoryTitle>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
          {description}
        </Txt>
      </RepositoryInfo>
      <LanguageBox>
        <LanguageColor $language={language} />
        <Txt color={COLORS.baseColors.gray800} textStyleName="P6">
          {language}
        </Txt>
      </LanguageBox>
    </RepositoryItemContainer>
  );
};

export default RepositoryItem;
