import { NavbarLink, NavbarLinkContainer } from '../styles/Navbar.styled';
import { useRef, useState } from 'react';

import { SlidingMenu } from './MobileMenu.styled';

const MobileMenu = ({ links }) => {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpened((prev) => !prev);
    menuRef.current?.classList.toggle(styles.active);
  };
  return (
    <>
      <SlidingMenu ref={menuRef}>
        <NavbarLinkContainer>
          {links.map((item) => (
            <NavbarLink key={item.path} to={item.path}>
              {item.title}
            </NavbarLink>
          ))}
        </NavbarLinkContainer>
      </SlidingMenu>
    </>
  );
};

export default MobileMenu;
