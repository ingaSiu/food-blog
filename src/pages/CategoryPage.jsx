import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { PostsContainer } from '../components/styles/MainPage.styled';
import { CategoryTitleContainer } from '../components/styles/FoodCard.styled';
import FoodCardMapping from './FoodCardMapping';
import { usePostsByCategory, useAllCategoriesQuery } from '../hooks/categories';

const CategoryPage = () => {
  const [categoryTitle, setCategoryTitle] = useState('');
  const { categoryId } = useParams();

  const { data: categories } = useAllCategoriesQuery();
  const { data: recipes } = usePostsByCategory(categoryId);

  useEffect(() => {
    const category = categories && categories.find((category) => category._id === categoryId);
    category && setCategoryTitle(category.title);
  }, [categoryId, categories]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <PostsContainer>
      <CategoryTitleContainer categories={categories || []}>
        <h1>Category: {categoryTitle}</h1>
      </CategoryTitleContainer>
      <FoodCardMapping posts={recipes || []} />
    </PostsContainer>
  );
};

export default CategoryPage;
