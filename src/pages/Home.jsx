import { PostsContext } from '../contexts/PostsContext';
import { useContext } from 'react';
import FoodCardMapping from './FoodCardMapping';

const Home = () => {
  const { posts } = useContext(PostsContext);

  return (
    <>
      <FoodCardMapping posts={posts} />
    </>
  );
};
export default Home;
