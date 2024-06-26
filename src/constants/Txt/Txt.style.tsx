import styled from '@emotion/styled';
import { TEXT_STYLES, TextStyleName } from '../Font/Font';

interface StyledTextProps {
  color?: string;
  textStyleName: TextStyleName;
}

export const StyledText = styled.div<StyledTextProps>(({ color, textStyleName }) => ({
  color,
  fontSize: TEXT_STYLES[textStyleName].fontSize,
  fontWeight: TEXT_STYLES[textStyleName].fontWeight,
  lineHeight: TEXT_STYLES[textStyleName].lineHeight,
  letterSpacing: TEXT_STYLES[textStyleName].letterSpacing,
}));
