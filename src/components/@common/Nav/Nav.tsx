import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { NavContainer, NavItem } from './Nav.style';
import { useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const [navItems, setNavItems] = useState([
    { id: 'feed', text: '피드', selected: true },
    { id: 'friend', text: '친구', selected: false },
    { id: 'my', text: '마이', selected: false },
  ]);

  function handleNavItemClicked(itemId: string) {
    const updatedItems = navItems.map((item) => ({ ...item, selected: item.id === itemId }));
    setNavItems(updatedItems);
    navigate(`/${itemId}`);
  }

  return (
    <NavContainer>
      {navItems.map((item) => (
        <NavItem key={item.id} type="button" onClick={() => handleNavItemClicked(item.id)}>
          <Txt
            color={item.selected ? COLORS.baseColors.gray950 : COLORS.baseColors.gray400}
            textStyleName="body1"
          >
            {item.text}
          </Txt>
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default Nav;
