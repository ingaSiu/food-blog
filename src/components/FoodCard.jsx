import { FoodCardStyle } from './styles/MainPage.styled';
import { generatePath } from 'react-router-dom';
import { Button, ButtonLink } from './styles/Button.styled';
import { RECIPE_PAGE_PATH } from '../routes/const';

const FoodCard = ({ recipeId, title, imageUrl }) => {
  return (
    <FoodCardStyle>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <Button>
        <ButtonLink to={generatePath(RECIPE_PAGE_PATH, { recipeId })}>Skaityti toliau → </ButtonLink>
      </Button>
    </FoodCardStyle>
  );
};
export default FoodCard;
