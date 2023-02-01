import { NavbarContainer, NavbarLink, NavbarLinkContainer } from './styles/Navbar.style';
import { HOME_PATH, ABOUT_ME_PATH, RECIPE_PAGE_PATH } from '../routes/const';
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLinkContainer>
          <NavbarLink to={HOME_PATH}>HOME</NavbarLink>
          <NavbarLink to={ABOUT_ME_PATH}>ABOUT ME</NavbarLink>
          <NavbarLink to={HOME_PATH}>HOME</NavbarLink>
        </NavbarLinkContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
