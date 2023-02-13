import { NavbarContainer, NavbarLink, NavbarLinkContainer, IconContainer, IconText } from './styles/Navbar.styled';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../assets/images/logo.png';
import { ButtonStyle, ButtonLink } from './styles/Button.styled';
const Navbar = ({ links, homeLink, isAdmin }) => {
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

        {!isAdmin && <SearchBar />}
        {isAdmin && (
          <ButtonStyle>
            <ButtonLink to={homeLink}>Logout</ButtonLink>
          </ButtonStyle>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
