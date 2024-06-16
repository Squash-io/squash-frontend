import { COLORS } from '../../../../constants/Color/Color';
import Txt from '../../../../constants/Txt/Txt';
import { GoalInfo, GoalItemContainer, GoalTitle, StartCircle, StartDate } from './GoalItem.style';

interface GoalItemProps {
  goalTitle: string;
  period: number;
  startDate: string;
  repository: string;
}
const GoalItem = (props: GoalItemProps) => {
  const { goalTitle, period, startDate, repository } = props;
  return (
    <GoalItemContainer>
      <GoalInfo>
        <GoalTitle>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P4">
            {goalTitle}
          </Txt>
          <Txt color={COLORS.baseColors.gray300} textStyleName="P6">
            {period}일째 진행중
          </Txt>
        </GoalTitle>
        <StartDate>
          <StartCircle></StartCircle>
          <Txt color={COLORS.baseColors.gray400} textStyleName="P6">
            start : {startDate}
          </Txt>
        </StartDate>
      </GoalInfo>
      <Txt color="#4988E7" textStyleName="P6">
        {repository}
      </Txt>
    </GoalItemContainer>
  );
};

export default GoalItem;
