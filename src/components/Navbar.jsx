import { ButtonLink, ButtonStyle } from './styles/Button.styled';
import {
  IconContainer,
  IconText,
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
  SmallLogo,
} from './styles/Navbar.styled';

import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu/MobileMenu';
import SearchBarComponent from './SearchBarComponent';
import logo from '../assets/images/logo.png';

const Navbar = ({ links, homeLink, isAdmin, onClick }) => {
  return (
    <>
      <NavbarContainer>
        <Link to={homeLink}>
          <SmallLogo src={logo} alt="Black Cat" width={60} />
        </Link>

        <NavbarLinkContainer as={Link} to={homeLink}>
          <IconContainer>
            <img src={logo} alt="Black Cat" />
          </IconContainer>
          <IconText>Nekotastic kitchen</IconText>
        </NavbarLinkContainer>

        <NavbarLinkContainer>
          {links.map((item) => (
            <NavbarLink key={item.path} to={item.path}>
              {item.title}
            </NavbarLink>
          ))}
        </NavbarLinkContainer>

        {!isAdmin && <SearchBarComponent />}
        {isAdmin && (
          <ButtonLink to={homeLink} onClick={onClick}>
            <ButtonStyle>Logout</ButtonStyle>
          </ButtonLink>
        )}
        <MobileMenu links={links} />
      </NavbarContainer>
    </>
  );
};

export default Navbar;
