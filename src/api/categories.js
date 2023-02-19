import axios from 'axios';
import { BASE_PUBLIC_URL, BASE_ADMIN_URL } from './baseApi';

const PUBLIC_CATEGORIES_URLS = {
  getAllCategories: `${BASE_PUBLIC_URL}categories`,
  getOneCategory: `${BASE_PUBLIC_URL}categories/`,
  getPostsByCategory: `${BASE_PUBLIC_URL}categories-posts/`,
};

const ADMIN_CATEGORIES_URLS = {
  insert: `${BASE_ADMIN_URL}categories`,
  update: `${BASE_ADMIN_URL}categories/`,
};

export const getAllCategories = () => {
  console.log('START get all categories');
  console.log(PUBLIC_CATEGORIES_URLS.getAllCategories);
  return axios.get(PUBLIC_CATEGORIES_URLS.getAllCategories).then((response) => {
    console.log('SUCCESS getAllCategories');
    console.log(response.data);
    return response.data;
  });
};

export const getPostsByCategory = ({ queryKey }) => {
  const id = queryKey[1];
  console.log('START get all posts by category');
  console.log(PUBLIC_CATEGORIES_URLS.getPostsByCategory);
  return axios.get(`${PUBLIC_CATEGORIES_URLS.getPostsByCategory}${id}`).then((response) => {
    return response.data;
  });
};

export const insertCategory = (category) => {
  console.log(`START insertCat`);
  console.log(`${ADMIN_CATEGORIES_URLS.insert}`);
  return axios.post(`${ADMIN_CATEGORIES_URLS.insert}`, category).then((response) => {
    console.log('SUCCESS insertPost');
    console.log(response.data);
    return response.data;
  });
};
