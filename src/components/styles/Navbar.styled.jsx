import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 40px;
  //padding-bottom: 40px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  text-transform: uppercase;
  color: purple;
  font-size: 20px;
`;

export const IconContainer = styled.div`
  display: flex;

  img {
    width: 60px;
  }
`;

export const IconText = styled.p`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 20px;
`;
