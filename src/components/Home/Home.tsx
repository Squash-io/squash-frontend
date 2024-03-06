import Txt from '../../constants/Txt/Txt';
import { COLORS } from '../../constants/Color/Color';
export const Home = () => {
  return (
    <>
      <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
        Home
      </Txt>
      <Txt color={COLORS.primary.purple500} textStyleName="body1">
        Home2
      </Txt>
    </>
  );
};
