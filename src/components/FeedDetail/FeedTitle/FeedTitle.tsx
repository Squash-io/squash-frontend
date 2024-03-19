import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { FeedTitleBox } from './FeedTitle.style';

interface FeedTitleProps {
  title?: string;
  day: number;
}
const FeedTitle = (props: FeedTitleProps) => {
  const { title, day } = props;
  return (
    <FeedTitleBox>
      <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
        {title}
      </Txt>
      <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
        {day}
      </Txt>
    </FeedTitleBox>
  );
};

export default FeedTitle;
