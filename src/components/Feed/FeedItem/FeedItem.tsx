import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { getIconByCategory } from '../../../utils/iconUtils';
import ProfileInfo from '../../@common/ProfileInfo/ProfileInfo';
import { FeedContainer } from '../FeedList/FeedList.style';
import { ActivityContainer, ActivityText, LanguageBox, LanguageColor } from './FeedItem.style';

export interface FeedProps {
  id: number;
  name: string;
  repository: string;
  image: string;
  category: string;
  activityTitle: string;
  activitySubTitle: string | null;
  language: string | null;
}
const FeedItem = (props: FeedProps) => {
  const { id, name, repository, image, category, activityTitle, activitySubTitle, language } =
    props;
  const navigate = useNavigate();
  const handleToMoveFeedDetail = () => {
    navigate('/feedDetail', {
      state: { id: id },
    });
  };
  return (
    <FeedContainer onClick={handleToMoveFeedDetail}>
      <ProfileInfo name={name} repository={repository} image={image} />
      <ActivityContainer>
        {getIconByCategory(category)}
        <ActivityText>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P4">
            {activityTitle}
          </Txt>
          {activitySubTitle && (
            <Txt color={COLORS.baseColors.gray400} textStyleName="P6">
              {activitySubTitle}
            </Txt>
          )}
          {language && (
            <LanguageBox>
              <LanguageColor $language={language} />
              <Txt color={COLORS.baseColors.gray800} textStyleName="P6">
                {language}
              </Txt>
            </LanguageBox>
          )}
        </ActivityText>
      </ActivityContainer>
    </FeedContainer>
  );
};

export default FeedItem;
