import styled from 'styled-components';

export const FoodCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 25px;
    text-align: center;
    color: black;
    width: 600px;
    margin-bottom: 30px;
    padding-top: 25px;
    border-top: 1px solid grey;
  }
  img {
    width: 700px;

    @media (max-width: 768px) {
      max-width: 90%;
      height: auto;
    }
    @media (max-width: 400px) {
      width: 60%;
      height: auto;
    }
  }
`;

export const CategoryTitleContainer = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-bottom: 10px;

  h1 {
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    letter-spacing: 2px;
  }
`;
