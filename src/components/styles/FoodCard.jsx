import { FoodCardStyle } from './MainPage.style';
const FoodCard = ({ title, imageUrl }) => {
  return (
    <FoodCardStyle>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
    </FoodCardStyle>
  );
};
export default FoodCard;
