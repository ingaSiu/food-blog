import Navbar from '../components/Navbar';
import FoodCard from '../components/FoodCard';
import Sidebar from '../components/Sidebar';
import { HomeContainer, HomePosts, PostsContainer } from '../components/styles/MainPage.styled.jsx';

import { recipes } from '../assets/recipe';
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <Sidebar />
        <PostsContainer>
          <HomePosts>
            {recipes.map((item) => (
              <FoodCard key={item.id} recipeId={item.id} title={item.title} imageUrl={item.imageUrl} />
            ))}
          </HomePosts>
        </PostsContainer>
      </HomeContainer>
    </>
  );
};
export default Home;
