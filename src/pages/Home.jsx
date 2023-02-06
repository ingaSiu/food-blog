import Navbar from '../components/Navbar';
import FoodCard from '../components/FoodCard';
import Sidebar from '../components/Sidebar';
import { HomeContainer, HomePosts, PostsContainer } from '../components/styles/MainPage.styled.jsx';
import { PostsContext } from '../contexts/PostsContext';
import { useContext } from 'react';

import { recipes } from '../assets/recipe';
const Home = () => {
  const { posts } = useContext(PostsContext);
  console.log(posts);
  return (
    <>
      <Navbar />
      <HomeContainer>
        <PostsContainer>
          <HomePosts>
            {posts.map((item) => (
              <FoodCard key={item._id} recipeId={item._id} title={item.title} imageUrl={item.imageUrl} />
            ))}
          </HomePosts>
        </PostsContainer>
        <Sidebar />
      </HomeContainer>
    </>
  );
};
export default Home;
