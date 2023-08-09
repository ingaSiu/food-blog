import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100px;
  position: relative;
  svg {
    position: absolute;
    left: 12px;
    top: 8px;
    font-size: 22px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
export const SearchInput = styled.input`
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  outline: none;
  padding: 10px 40px;
`;

export const ContentContainer = styled.div`
  height: 135px;
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 5px;
  width: 225px;
  overflow-y: auto;
  margin-left: 144px;
  margin-top: 5px;

  p {
    padding-left: 5px;

    font-size: 15px;
  }
`;
