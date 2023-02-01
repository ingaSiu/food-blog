import Navbar from '../components/Navbar';
import { HomeContainer } from '../components/styles/MainPage.style.jsx';
import FoodCard from '../components/styles/FoodCard';
import { array } from '../components/assets/array';
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeContainer>
        {array.map((item) => (
          <FoodCard key={item.title} title={item.title} imageUrl={item.imageUrl} />
        ))}
      </HomeContainer>
    </div>
  );
};
export default Home;
