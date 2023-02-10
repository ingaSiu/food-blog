import FoodCard from '../components/FoodCard';
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
      <PostsContainer>
        <HomePosts>
          {posts.map((item) => (
            <FoodCard key={item._id} recipeId={item._id} title={item.title} imageUrl={item.imageUrl} />
          ))}
        </HomePosts>
      </PostsContainer>
    </>
  );
};
export default Home;
