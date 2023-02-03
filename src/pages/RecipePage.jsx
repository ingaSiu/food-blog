import RecipeCard from '../components/RecipeCard';
import { recipes } from '../assets/recipe';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../components/styles/RecipeCard.styled';
const RecipePage = () => {
  const { recipeId } = useParams();

  console.log(useParams());
  return (
    <>
      <PageContainer>
        {recipes
          .filter((recipe) => recipe.id === Number(recipeId))
          .map((recipe) => (
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
