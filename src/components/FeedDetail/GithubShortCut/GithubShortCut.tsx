import { IcChervonsRight, IcGitHubSmall } from '../../../assets';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { GithubShortCutContainer, ShortCutButtonContainer } from './GithubShortCut.style';

interface GithubShortCutProps {
  githubUrl: string;
}
const GithubShortCut = (props: GithubShortCutProps) => {
  const { githubUrl } = props;
  const handleClick = async () => {
    window.location.href = `${githubUrl}`;
  };

  return (
    <GithubShortCutContainer>
      <ShortCutButtonContainer type="button" onClick={handleClick}>
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
