import { IcChevronRight, IcNoGoal } from '../../../../assets';
import { COLORS } from '../../../../constants/Color/Color';
import Txt from '../../../../constants/Txt/Txt';
import { BannerContainer, BannerContent, GoalShortCut } from './NoGoalBanner.style';

const NoGoalBanner = () => {
  return (
    <BannerContainer>
      <IcNoGoal />
      <BannerContent>
        <Txt color={COLORS.baseColors.gray000} textStyleName="P4">
          오늘부터 1일 1커밋 해보는 거 어때요?
        </Txt>
        <GoalShortCut>
          <Txt color={COLORS.baseColors.gray950} textStyleName="B1">
            목표 세우러 가기
          </Txt>
          <IcChevronRight />
        </GoalShortCut>
      </BannerContent>
    </BannerContainer>
  );
};

export default NoGoalBanner;
