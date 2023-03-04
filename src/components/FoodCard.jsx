import { ButtonLink } from './styles/Button.styled';
import ButtonMain from './Button';
import { FoodCardStyle } from './styles/FoodCard.styled';
import { RECIPE_PAGE_PATH } from '../routes/const';
import { generatePath } from 'react-router-dom';

const FoodCard = ({ recipeId, title, imageUrl }) => {
  return (
    <FoodCardStyle>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />

      <ButtonLink to={generatePath(RECIPE_PAGE_PATH, { recipeId })}>
        <ButtonMain>Read more →</ButtonMain>
      </ButtonLink>
    </FoodCardStyle>
  );
};
export default FoodCard;
