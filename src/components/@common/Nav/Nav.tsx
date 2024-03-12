import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { NavContainer, NavItem } from './Nav.style';
import { useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const [navItems, setNavItems] = useState([
    { id: 'feed', text: '피드' },
    { id: 'friend', text: '친구' },
    { id: 'my', text: '마이' },
  ]);

  function handleNavItemClicked(itemId: string) {
    navigate(`/${itemId}`);
  }

  return (
    <NavContainer>
      {navItems.map((item) => (
        <NavItem key={item.id} type="button" onClick={() => handleNavItemClicked(item.id)}>
          <Txt color={COLORS.baseColors.gray400} textStyleName="body1">
            {item.text}
          </Txt>
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default Nav;
