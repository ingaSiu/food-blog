import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  width: 80%;
  background-color: khaki;
  display: flex;
  flex-direction: column;
  border-top: 1px solid grey;
  align-items: center;
  margin: 40px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  text-transform: uppercase;
  color: purple;
`;
