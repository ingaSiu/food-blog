import { PageContainer, CardContainer } from './styles/RecipeCard.styled';

const RecipeCard = ({ title, imageUrl, ingriedients, making }) => {
  return (
    <PageContainer>
      <CardContainer>
        <h1>{title}</h1>
        <img src={imageUrl} alt={title} />
        <p>{ingriedients}</p>
        <p>{making}</p>
      </CardContainer>
    </PageContainer>
  );
};
export default RecipeCard;
