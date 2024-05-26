import { IcGitHubSmall } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { LoginButtonContainer } from './LoginButton.style';

const LoginButton = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_REDIRCT_URL;

  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
  };

  return (
    <LoginButtonContainer
      type="button"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleLoginClick(event)}
    >
      <IcGitHubSmall />
      <Txt color={COLORS.baseColors.gray000} textStyleName="B1">
        깃허브로 로그인하기
      </Txt>
    </LoginButtonContainer>
  );
};

export default LoginButton;
