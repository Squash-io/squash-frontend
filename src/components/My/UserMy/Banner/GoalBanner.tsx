import { IcChervonsRight, IcGoal } from '../../../../assets';
import { COLORS } from '../../../../constants/Color/Color';
import Txt from '../../../../constants/Txt/Txt';
import { BannerContainer, BannerContent, BannerText, GoalShortCut } from './GoalBanner.style';

const GoalBanner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <IcGoal />
        <BannerText>
          <Txt color={COLORS.baseColors.gray050} textStyleName="P4">
            알고리즘 1일 1커밋
          </Txt>
          <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
            벌써 잊은 건 아니죠?
          </Txt>
        </BannerText>
      </BannerContent>
      <GoalShortCut type="button">
        <Txt color={COLORS.baseColors.gray950} textStyleName="P6">
          다른 목표도 세우러가기
        </Txt>
        <IcChervonsRight />
      </GoalShortCut>
    </BannerContainer>
  );
};

export default GoalBanner;
