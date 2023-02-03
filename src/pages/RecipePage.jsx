import RecipeCard from '../components/RecipeCard';
import { recipes } from '../assets/recipe';
import { PageContainer } from '../components/styles/RecipeCard.styled';
const RecipePage = () => {
  return (
    <>
      <PageContainer>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            imageUrl={recipe.imageUrl}
            ingriedients={recipe.ingriedients}
            making={recipe.making}
          ></RecipeCard>
        ))}
      </PageContainer>
    </>
  );
};
export default RecipePage;
