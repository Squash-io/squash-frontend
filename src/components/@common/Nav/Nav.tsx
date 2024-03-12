import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { NavContainer, NavItem } from './Nav.style';

const Nav = () => {
  const navigate = useNavigate();
  function handleMoveToFeed() {
    navigate('/feed');
  }
  function handleMoveToFriend() {
    navigate('/friend');
  }
  function handleMoveToMy() {
    navigate('/my');
  }
  return (
    <NavContainer>
      <NavItem type="button" onClick={handleMoveToFeed}>
        <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
          피드
        </Txt>
      </NavItem>
      <NavItem type="button" onClick={handleMoveToFriend}>
        <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
          친구
        </Txt>
      </NavItem>
      <NavItem type="button" onClick={handleMoveToMy}>
        <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
          마이
        </Txt>
      </NavItem>
    </NavContainer>
  );
};

export default Nav;
