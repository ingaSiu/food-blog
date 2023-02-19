import RecipeCard from '../components/RecipeCard';
import { useParams } from 'react-router-dom';

import { PageContainer } from '../components/styles/RecipeCard.styled';
import { usePostQuery } from '../hooks/posts';
const RecipePage = () => {
  const { recipeId } = useParams();

  const { data: recipeData } = usePostQuery(recipeId);

  return (
    <>
      <PageContainer>
        {recipeData && (
          <RecipeCard
            key={recipeData._id}
            title={recipeData.title}
            imageUrl={recipeData.imageUrl}
            content={recipeData.content}
          ></RecipeCard>
        )}
      </PageContainer>
    </>
  );
};
export default RecipePage;
