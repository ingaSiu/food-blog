import { PostsContainer } from './styles/MainPage.styled';
import { HomePosts } from './styles/MainPage.styled';
import FoodCard from './FoodCard';

const FoodCards = ({ posts }) => {
  return (
    <PostsContainer>
      <HomePosts>
        {posts.map((item) => (
          <FoodCard key={item._id} recipeId={item._id} title={item.title} imageUrl={item.imageUrl} />
        ))}
      </HomePosts>
    </PostsContainer>
  );
};
export default FoodCards;
