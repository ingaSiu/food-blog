import FoodCard from '../components/FoodCard';
import FoodCards from '../components/FoodCards';
import { HomePosts, PostsContainer } from '../components/styles/MainPage.styled.jsx';
import { PostsContext } from '../contexts/PostsContext';
import { CategoryContext } from '../contexts/CategoryContext';
import { useContext } from 'react';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const { categories } = useContext(CategoryContext);
  console.log(posts);
  console.log(categories);
  return (
    <>
      <FoodCards posts={posts} />
    </>
  );
};
export default Home;
