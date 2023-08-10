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
`;

export const SmallLogo = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    display: none;
  }
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
