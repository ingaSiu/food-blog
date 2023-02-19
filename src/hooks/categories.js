import { useQuery, useMutation } from 'react-query';
import { queryClient } from '../App';
import { getAllCategories, getPostsByCategory } from '../api/categories';

export const useAllCategoriesQuery = () => {
  return useQuery('getAllCategories', getAllCategories);
};

export const usePostsByCategory = (id) => {
  return useQuery(['getAllPostsByCategory', id], getPostsByCategory);
};
