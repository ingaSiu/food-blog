import Navbar from '../components/Navbar';
import FoodCard from '../components/FoodCard';
import Sidebar from '../components/Sidebar';
import { HomeContainer, HomePosts, PostsContainer } from '../components/styles/MainPage.styled.jsx';
import { PostsContext } from '../contexts/PostsContext';
import { CategoryContext } from '../contexts/CategoryContext';
import { useContext } from 'react';
import Footer from '../components/Footer';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const { categories } = useContext(CategoryContext);
  console.log(posts);
  console.log(categories);
  return (
    <>
      <Navbar categories={categories} />
      <HomeContainer>
        <PostsContainer>
          <HomePosts>
            {posts.map((item) => (
              <FoodCard key={item._id} recipeId={item._id} title={item.title} imageUrl={item.imageUrl} />
            ))}
          </HomePosts>
        </PostsContainer>
        <Sidebar categories={categories} />
      </HomeContainer>
      <Footer />
    </>
  );
};
export default Home;
