import { IcChevronRight, IcGithub } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { BannerContainer, BannerContent, ShortCut } from './Banner.style';

const Banner = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_REDIRCT_URL;

  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(clientId);
    console.log(redirectUrl);
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
  };
  return (
    <BannerContainer>
      <IcGithub />
      <BannerContent>
        <Txt color={COLORS.baseColors.gray000} textStyleName="P4">
          내 친구들의 커밋소식을 알기 위해
        </Txt>
        <ShortCut onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleLoginClick(event)}>
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
