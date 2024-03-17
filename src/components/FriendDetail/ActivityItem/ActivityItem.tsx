import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import {
  GraphContainer,
  InfoContainer,
  ItemContainer,
  RepositoryContainer,
  RepoLangContainer,
  LanguageColor,
  LanguageContainer,
} from './ActivityItem.style';
import { getIconByCategory } from '../../../utils/iconUtils';

interface ActivityProps {
  props: {
    category: string;
    activityTitle: string;
    activitySubTitle: string | null;
    repositoryImg: string;
    repository: string;
    language: string;
  };
}

export const ActivityItem = ({ props }: ActivityProps) => {
  const { category, activityTitle, activitySubTitle, repositoryImg, repository, language } = props;
  return (
    <ItemContainer>
      <GraphContainer>
        <div>{getIconByCategory(category)}</div>
        <div className="day-line"></div>
      </GraphContainer>
      <InfoContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P4" className="activityTitle">
          {activityTitle}
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6" className="activitySubTitle">
          {activitySubTitle}
        </Txt>
        <RepoLangContainer>
          <RepositoryContainer>
            <img src={repositoryImg} className="repositoryImg"></img>
            <Txt color={COLORS.baseColors.gray500} textStyleName="P7">
              @{repository}
            </Txt>
          </RepositoryContainer>
          <LanguageContainer>
            <LanguageColor $language={language} />
            <Txt color={COLORS.baseColors.gray800} textStyleName="P6" className="language">
              {language}
            </Txt>
          </LanguageContainer>
        </RepoLangContainer>
      </InfoContainer>
    </ItemContainer>
  );
};
