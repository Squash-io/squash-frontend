import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { NavContainer, NavItem } from './Nav.style';

const Nav = () => {
  return (
    <NavContainer>
      <NavItem type="button">
        <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
          피드
        </Txt>
      </NavItem>
      <NavItem type="button">
        <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
          친구
        </Txt>
      </NavItem>
      <NavItem type="button">
        <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
          마이
        </Txt>
      </NavItem>
    </NavContainer>
  );
};

export default Nav;
