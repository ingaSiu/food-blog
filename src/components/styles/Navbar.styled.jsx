import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  justify-content: space-around;
  margin-top: 10px;
  /* margin-bottom: 20px; */
  //padding-bottom: 40px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  text-decoration: none;
  color: black;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  text-transform: uppercase;
  color: black;
  font-size: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 80px;

  img {
    width: 100%;
  }
`;

export const IconText = styled.p`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 20px;
`;
