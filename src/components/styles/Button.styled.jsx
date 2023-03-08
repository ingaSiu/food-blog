import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border: 1px solid #f4f4f4;
  margin-top: 25px;
  background-color: #fff;
  outline: #fff;
  width: 150px;
  height: 45px;
  color: #b46b2b;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #b46b2b;
`;
