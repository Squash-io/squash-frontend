import { useLocation, useNavigate } from 'react-router-dom';
import { COLORS } from '../../../constants/Color/Color';
import Txt from '../../../constants/Txt/Txt';
import { NavContainer, NavItem } from './Nav.style';
import { useEffect, useState } from 'react';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navItems, setNavItems] = useState([
    { id: 'feed', text: '피드', selected: false },
    { id: 'feedDetail', text: '피드상세', selected: false },
    { id: 'friend', text: '친구', selected: false },
    { id: 'friendDetail', text: '친구상세', selected: false },
    { id: 'my', text: '마이', selected: false },
  ]);
  const showNavItems = navItems.filter((item) => item.id.length < 7);

  useEffect(() => {
    const selectedNavItem = navItems.find((item) => `/${item.id}` === location.pathname);
    if (selectedNavItem) {
      if (selectedNavItem.id === 'feedDetail') {
        const updatedItems = navItems.map((item) => ({
          ...item,
          selected: item.id === 'feed',
        }));
        setNavItems(updatedItems);
      } else if (selectedNavItem.id === 'friendDetail') {
        const updatedItems = navItems.map((item) => ({
          ...item,
          selected: item.id === 'friend',
        }));
        setNavItems(updatedItems);
      } else {
        const updatedItems = navItems.map((item) => ({
          ...item,
          selected: item.id === selectedNavItem?.id,
        }));
        setNavItems(updatedItems);
      }
    }
  }, [location.pathname]);

  function handleNavItemClicked(itemId: string) {
    navigate(`/${itemId}`);
  }

  return (
    <NavContainer>
      {showNavItems.map((item) => (
        <NavItem
          key={item.id}
          type="button"
          onClick={() => handleNavItemClicked(item.id)}
          $selected={item.selected}
        >
          <Txt
            color={item.selected ? COLORS.baseColors.gray950 : COLORS.baseColors.gray400}
            textStyleName="P2"
          >
            {item.text}
          </Txt>
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default Nav;
