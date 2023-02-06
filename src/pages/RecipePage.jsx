import RecipeCard from '../components/RecipeCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PageContainer } from '../components/styles/RecipeCard.styled';
const RecipePage = () => {
  const [recipeData, setRecipeData] = useState(undefined);
  const { recipeId } = useParams();
  const getPost = () => {
    axios
      .get('http://localhost:3001/api/public/posts/' + recipeId)
      .then((response) => {
        setRecipeData(response.data);
        console.log('response from single post ftech');
        console.log(response.data);
        console.log(recipeData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPost();
  }, []);

  console.log(useParams());
  return (
    <>
      <PageContainer>
        {recipeData &&
          recipeData.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              title={recipe.title}
              imageUrl={recipe.imageUrl}
              ingriedients={recipe.content}
              making={recipe.content}
            ></RecipeCard>
          ))}
      </PageContainer>
    </>
  );
};
export default RecipePage;
