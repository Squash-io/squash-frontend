import { IcAlertCircle, IcCommit, IcPullRequest } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { FeedContainer } from '../FeedList/FeedList.style';
import {
  ActivityContainer,
  ActivityText,
  InfoContainer,
  InfoPicture,
  InfoText,
} from './FeedItem.style';

export interface FeedProps {
  name: string;
  repository: string;
  image: string;
  category: string;
  activityTitle: string;
  activitySubTitle: string | null;
  language: string | null;
}
const FeedItem = (props: FeedProps) => {
  const { name, repository, image, category, activityTitle, activitySubTitle, language } = props;

  return (
    <FeedContainer>
      <InfoContainer>
        <InfoPicture src={image} />
        <InfoText>
          <Txt color={COLORS.baseColors.gray950} textStyleName="body1">
            {name}
          </Txt>
          <Txt color={COLORS.baseColors.gray400} textStyleName="body2R">
            {repository}
          </Txt>
        </InfoText>
      </InfoContainer>
      <ActivityContainer>
        {category === 'pr' && <IcPullRequest />}
        {category === 'commit' && <IcCommit />}
        {category === 'alert' && <IcAlertCircle />}
        <ActivityText>
          <Txt color={COLORS.baseColors.gray950} textStyleName="body2R">
            {activityTitle}
          </Txt>
          {activitySubTitle && (
            <Txt color={COLORS.baseColors.gray400} textStyleName="caption">
              {activitySubTitle}
            </Txt>
          )}
          {language && (
            <Txt color={COLORS.baseColors.gray800} textStyleName="caption">
              {language}
            </Txt>
          )}
        </ActivityText>
      </ActivityContainer>
    </FeedContainer>
  );
};

export default FeedItem;
