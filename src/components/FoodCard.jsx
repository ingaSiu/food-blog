import { FoodCardStyle } from './styles/FoodCard.styled';
import { generatePath } from 'react-router-dom';
import { ButtonLink } from './styles/Button.styled';
import { RECIPE_PAGE_PATH } from '../routes/const';
import ButtonMain from './Button';
const FoodCard = ({ recipeId, title, imageUrl }) => {
  return (
    <FoodCardStyle>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <ButtonMain>
        <ButtonLink to={generatePath(RECIPE_PAGE_PATH, { recipeId })}>Read more → </ButtonLink>
      </ButtonMain>
    </FoodCardStyle>
  );
};
export default FoodCard;
