import { CardContainer, ContentContainer } from './styles/RecipeCard.styled';
import { Parser } from 'html-to-react';

const RecipeCard = ({ title, imageUrl, content }) => {
  return (
    <CardContainer>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <ContentContainer>{Parser().parse(content)}</ContentContainer>
    </CardContainer>
  );
};
export default RecipeCard;
