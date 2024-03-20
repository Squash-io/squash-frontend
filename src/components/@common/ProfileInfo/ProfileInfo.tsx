import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { InfoContainer, InfoPicture, InfoText } from './ProfileInfo.style';

interface ProfileProps {
  name: string;
  repository: string;
  image: string;
}

const ProfileInfo = (props: ProfileProps) => {
  const { name, repository, image } = props;
  return (
    <InfoContainer>
      <InfoPicture src={image} />
      <InfoText>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
          {name}
        </Txt>
        <Txt color={COLORS.baseColors.gray400} textStyleName="P4">
          {repository}
        </Txt>
      </InfoText>
    </InfoContainer>
  );
};

export default ProfileInfo;
