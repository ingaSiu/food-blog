import { BASE_ADMIN_URL, BASE_PUBLIC_URL } from './baseApi';

import httpClient from './httpClient';

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
  return httpClient.get(PUBLIC_CATEGORIES_URLS.getAllCategories).then((response) => {
    return response.data;
  });
};

export const getPostsByCategory = ({ queryKey }) => {
  const id = queryKey[1];
  return httpClient.get(`${PUBLIC_CATEGORIES_URLS.getPostsByCategory}${id}`).then((response) => {
    return response.data;
  });
};

export const insertCategory = (category) => {
  return httpClient.post(`${ADMIN_CATEGORIES_URLS.insert}`, category).then((response) => {
    console.log('SUCCESS insertPost');
    console.log(response.data);
    return response.data;
  });
};
