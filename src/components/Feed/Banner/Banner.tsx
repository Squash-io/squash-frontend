import { IcChevronRight, IcGithub } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { BannerContainer, BannerContent, ShortCut } from './Banner.style';

const Banner = () => {
  return (
    <BannerContainer>
      <IcGithub />
      <BannerContent>
        <Txt color={COLORS.baseColors.gray000} textStyleName="P4">
          내 친구들의 커밋소식을 알기 위해
        </Txt>
        <ShortCut>
          <Txt color={COLORS.baseColors.gray950} textStyleName="B1">
            깃허브 로그인 바로가기
          </Txt>
          <IcChevronRight />
        </ShortCut>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
