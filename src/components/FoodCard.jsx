import { FoodCardStyle } from './styles/FoodCard.styled';
import { generatePath } from 'react-router-dom';
import { ButtonStyle, ButtonLink } from './styles/Button.styled';
import { RECIPE_PAGE_PATH } from '../routes/const';

const FoodCard = ({ recipeId, title, imageUrl }) => {
  return (
    <FoodCardStyle>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <ButtonStyle>
        <ButtonLink to={generatePath(RECIPE_PAGE_PATH, { recipeId })}>Read more → </ButtonLink>
      </ButtonStyle>
    </FoodCardStyle>
  );
};
export default FoodCard;
