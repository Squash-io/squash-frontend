import { IcChervonsRight, IcGitHubSmall } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { GithubShortCutContainer, ShortCutButtonContainer } from './GithubShortCut.style';

const GithubShortCut = () => {
  return (
    <GithubShortCutContainer>
      <ShortCutButtonContainer type="button">
        <IcGitHubSmall />
        <Txt color={COLORS.baseColors.gray950} textStyleName="P7">
          깃허브에서 확인하기
        </Txt>
        <IcChervonsRight />
      </ShortCutButtonContainer>
    </GithubShortCutContainer>
  );
};

export default GithubShortCut;
