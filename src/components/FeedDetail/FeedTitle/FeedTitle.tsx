import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { formatToTodayOrDate } from '../../../utils/dateUtils';
import { getIconByCategory } from '../../../utils/iconUtils';
import { FeedTitleBox, FeedTitleContainer } from './FeedTitle.style';

interface FeedTitleProps {
  title: string;
  day: string;
  category: string;
}
const FeedTitle = (props: FeedTitleProps) => {
  const { title, day, category } = props;
  return (
    <FeedTitleContainer>
      {getIconByCategory(category)}
      <FeedTitleBox>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P2">
          {title}
        </Txt>
        <Txt color={COLORS.baseColors.gray500} textStyleName="P6">
          {formatToTodayOrDate(parseInt(day))}
        </Txt>
      </FeedTitleBox>
    </FeedTitleContainer>
  );
};

export default FeedTitle;
