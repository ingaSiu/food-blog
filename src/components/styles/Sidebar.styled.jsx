import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 15px 30px;
  margin-left: 30px;
`;

export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 150px;
  }
`;

export const SidebarTitle = styled.div`
  background-color: lightgray;
  text-align: center;
  text-transform: uppercase;
  color: grey;
  padding: 10px 15px;
  margin-bottom: 10px;
  width: 100%;
`;
export const SideText = styled.div`
  max-width: 200px;
  text-align: center;
  margin-bottom: 10px;
  line-height: 18px;
`;
export const Greeting = styled.p`
  font-family: 'Gloria Hallelujah', cursive;
  text-align: center;
  font-size: 24px;
`;
export const CategoriesContainer = styled.div`
  line-height: 18px;
`;
export const CategoriesList = styled.ul`
  list-style-type: none;

  li {
    text-decoration: none;
    padding-bottom: 5px;
  }
`;
export const CategoriesLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
`;

export const InputEmail = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  background-color: lightgray;
  border: none;
`;

export const SideBtn = styled.button`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid violet;
  outline: none;

  &:hover {
    background-color: palevioletred;
    cursor: pointer;
  }
`;
