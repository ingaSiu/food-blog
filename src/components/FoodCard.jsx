import { FoodCardStyle } from './styles/MainPage.style';
import { Button, ButtonLink } from './styles/Button.styled';
import { HOME_PATH, ABOUT_ME_PATH, RECIPE_PAGE_PATH } from '../routes/const';
const FoodCard = ({ title, imageUrl }) => {
  return (
    <FoodCardStyle>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <Button>
        <ButtonLink to={HOME_PATH}>Skaityti toliau → </ButtonLink>
      </Button>
    </FoodCardStyle>
  );
};
export default FoodCard;
