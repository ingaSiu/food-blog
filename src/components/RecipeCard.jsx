import { CardContainer } from './styles/RecipeCard.styled';

const RecipeCard = ({ title, imageUrl, ingriedients, making }) => {
  return (
    <CardContainer>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <p>{ingriedients}</p>
      <p>{making}</p>
    </CardContainer>
  );
};
export default RecipeCard;
