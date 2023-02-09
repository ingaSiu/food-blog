import { NavbarContainer, NavbarLink, NavbarLinkContainer, IconContainer, IconText } from './styles/Navbar.styled';
import { HOME_PATH, ABOUT_ME_PATH, TRAVEL_PATH } from '../routes/const';

import SearchBar from './SearchBar';
import logo from '../assets/images/logo.png';
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLinkContainer>
          <IconContainer>
            <img src={logo} alt="Black Cat" />
          </IconContainer>
          <IconText>Nekotastic kitchen</IconText>
        </NavbarLinkContainer>

        <NavbarLinkContainer>
          <NavbarLink to={HOME_PATH}>Recipes</NavbarLink>
          <NavbarLink to={TRAVEL_PATH}>Travel</NavbarLink>
          <NavbarLink to={ABOUT_ME_PATH}>ABOUT ME</NavbarLink>
        </NavbarLinkContainer>

        <SearchBar />
      </NavbarContainer>
    </>
  );
};

export default Navbar;
