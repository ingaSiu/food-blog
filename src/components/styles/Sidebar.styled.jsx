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
`;
export const SideText = styled.div`
  max-width: 200px;
  text-align: center;
  margin-bottom: 10px;
  p {
    font-size: 18px;
    line-height: 8px;
  }
`;
export const Greeting = styled.p`
  font-size: 25px;
  font-family: cursive;
  text-align: center;
`;

export const InputEmail = styled.input`
  padding: 10px;
  outline: none;
  background-color: lightgray;
  border: none;
`;

export const SideBtn = styled.button`
  margin-top: 10px;
  padding: 10px;
  width: 90px;
  border: 1px solid violet;
  outline: none;

  &:hover {
    background-color: palevioletred;
    cursor: pointer;
  }
`;
