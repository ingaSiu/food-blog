import { LinkContainerMobile, MenuWrapper, MobileLink, SlidingMenu } from './MobileMenu.styled';

import SearchBarComponent from '../SearchBarComponent';
import { useState } from 'react';

const MobileMenu = ({ links }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <>
      <SlidingMenu active={isOpened}>
        <LinkContainerMobile>
          {links.map((item) => (
            <MobileLink key={item.path} to={item.path}>
              {item.title}
            </MobileLink>
          ))}
        </LinkContainerMobile>
        <SearchBarComponent />
      </SlidingMenu>

      <MenuWrapper onClick={handleClick}>
        {isOpened ? (
          <img src="close.svg" alt="Close menu icon" width={19} height={16} />
        ) : (
          <img src="menu.svg" alt="Open menu icon" width={19} height={16} />
        )}
      </MenuWrapper>
    </>
  );
};

export default MobileMenu;
