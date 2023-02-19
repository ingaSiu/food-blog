import { useQuery, useMutation } from 'react-query';
import { queryClient } from '../App';
import { getAllCategories, getPostsByCategory, insertCategory } from '../api/categories';

export const useAllCategoriesQuery = () => {
  return useQuery('getAllCategories', getAllCategories);
};

export const usePostsByCategory = (id) => {
  return useQuery(['getAllPostsByCategory', id], getPostsByCategory);
};

export const useCategoryInsert = () => {
  return useMutation({
    mutationFn: insertCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllCategories'] });
    },
  });
};
