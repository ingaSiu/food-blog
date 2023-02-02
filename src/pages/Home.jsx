import Navbar from '../components/Navbar';
import { HomeContainer, HomePosts } from '../components/styles/MainPage.style.jsx';
import FoodCard from '../components/FoodCard';
import { array } from '../assets/array';
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomePosts>
          {array.map((item) => (
            <FoodCard key={item.title} title={item.title} imageUrl={item.imageUrl} />
          ))}
        </HomePosts>
      </HomeContainer>
    </>
  );
};
export default Home;
