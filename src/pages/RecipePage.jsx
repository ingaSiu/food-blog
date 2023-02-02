import { PageContainer, CardContainer } from '../components/styles/RecipeCard.styled';
import { recipe } from '../assets/recipe';
const RecipePage = () => {
  return (
    <>
      <PageContainer>
        {recipe.map((item) => (
          <CardContainer
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            ingriedients={item.ingriedients}
            making={item.making}
          ></CardContainer>
        ))}
      </PageContainer>
    </>
  );
};
export default RecipePage;
