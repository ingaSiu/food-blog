import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';

import { PostsContainer } from '../components/styles/MainPage.styled';
import { CategoryTitleContainer } from '../components/styles/FoodCard.styled';
import { CategoryContext } from '../contexts/CategoryContext';
import FoodCardMapping from './FoodCardMapping';

const CategoryPage = () => {
  const [postsData, setPostsData] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');
  const { categoryId } = useParams();
  const { categories } = useContext(CategoryContext);
  console.log(categories);
  const getCategoryPosts = () => {
    axios
      .get(`http://localhost:3001/api/public/categories-posts/${categoryId}`)
      .then((response) => {
        setPostsData(response.data);
        console.log('New data:');
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCategoryPosts();
    const category = categories.find((category) => category._id === categoryId);
    setCategoryTitle(category.title);
  }, [categoryId]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <PostsContainer>
      <CategoryTitleContainer categories={categories}>
        <h1>Category: {categoryTitle}</h1>
      </CategoryTitleContainer>
      <FoodCardMapping posts={postsData} />
    </PostsContainer>
  );
};

export default CategoryPage;
