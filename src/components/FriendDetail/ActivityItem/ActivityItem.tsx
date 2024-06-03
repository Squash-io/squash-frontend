import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import {
  GraphContainer,
  InfoContainer,
  ItemContainer,
  RepositoryContainer,
} from './ActivityItem.style';
import { getIconByCategory } from '../../../utils/iconUtils';
import { parseRepo } from '../../../utils/parseRepo';
import { useNavigate } from 'react-router-dom';

export const ActivityItem = (props: ActivityItemProps) => {
  const { id, commitType, activityTitle, repoUrl } = props;
  const navigate = useNavigate();

  const handleToMoveFeedDetail = () => {
    navigate('/feedDetail', {
      state: { id: id },
    });
  };

  return (
    <ItemContainer onClick={handleToMoveFeedDetail}>
      <GraphContainer>
        <div>{getIconByCategory(commitType)}</div>
        <div className="day-line"></div>
      </GraphContainer>
      <InfoContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P4" className="activityTitle">
          {activityTitle}
        </Txt>
        <RepositoryContainer>
          <Txt color={COLORS.baseColors.gray500} textStyleName="P7">
            @{parseRepo(repoUrl)}
          </Txt>
        </RepositoryContainer>
      </InfoContainer>
    </ItemContainer>
  );
};
