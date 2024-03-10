import Txt from '../../constants/Txt/Txt';
import { COLORS } from '../../constants/Color/Color';
import { IcBell } from '../../assets';
export const Feed = () => {
  return (
    <>
      <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
        Home
      </Txt>
      <IcBell />
      <Txt color={COLORS.primary.purple500} textStyleName="body1">
        Home2
      </Txt>
    </>
  );
};
