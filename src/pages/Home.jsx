import FoodCardMapping from './FoodCardMapping';
import { PostsContainer } from '../components/styles/MainPage.styled';
import { useAllPostsQuery } from '../hooks/posts';
const Home = () => {
  const { data } = useAllPostsQuery();
  return <PostsContainer>{<FoodCardMapping posts={data || []} />}</PostsContainer>;
};
export default Home;
