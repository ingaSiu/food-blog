import { PostsContainer } from '../components/styles/MainPage.styled';
import { HomePosts } from '../components/styles/MainPage.styled';
import FoodCard from '../components/FoodCard';

const FoodCardMapping = ({ posts }) => {
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
export default FoodCardMapping;
