import { PostsContext } from '../contexts/PostsContext';
import { useContext } from 'react';
import FoodCardMapping from './FoodCardMapping';
import { PostsContainer } from '../components/styles/MainPage.styled';
const Home = () => {
  const { posts } = useContext(PostsContext);

  return (
    <PostsContainer>
      <FoodCardMapping posts={posts} />
    </PostsContainer>
  );
};
export default Home;
