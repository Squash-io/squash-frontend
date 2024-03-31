import { IcChevronRight, IcGithub } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { BannerContainer, BannerContent, ShortCut } from './Banner.style';

const Banner = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
  console.log(redirectUrl);
  const handleLoginClick = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:5173/github/login/callback`;
  };
  return (
    <BannerContainer>
      <IcGithub />
      <BannerContent>
        <Txt color={COLORS.baseColors.gray000} textStyleName="P4">
          내 친구들의 커밋소식을 알기 위해
        </Txt>
        <ShortCut onClick={handleLoginClick}>
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
