import { NavbarContainer, NavbarLink, NavbarLinkContainer, IconContainer, IconText } from './styles/Navbar.styled';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { ButtonStyle, ButtonLink } from './styles/Button.styled';
import SearchBarComponent from './SearchBarComponent';
import SearchBarInput from './SearchBarInput';

const Navbar = ({ links, homeLink, isAdmin, onClick }) => {
  return (
    <>
      <NavbarContainer>
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
          <ButtonStyle>
            <ButtonLink to={homeLink} onClick={onClick}>
              Logout
            </ButtonLink>
          </ButtonStyle>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
