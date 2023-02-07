import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  }
  img {
    width: 500px;
  }
`;
