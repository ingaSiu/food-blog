import { getAllCategories, getPostsByCategory, insertCategory } from '../api/categories';
import { useMutation, useQuery } from 'react-query';

import { queryClient } from '../App';

export const useAllCategoriesQuery = () => {
  return useQuery({
    queryKey: 'getAllCategories',
    queryFn: getAllCategories,
    initialData:
      process.env.REACT_APP_FALLBACK_MODE.toLowerCase === 'true'
        ? require('../api/fallbackData/getCategories.json')
        : [],
  });
};

export const usePostsByCategory = (id) => {
  return useQuery({
    queryKey: ['getAllPostsByCategory', id],
    queryFn: getPostsByCategory,
    initialData:
      process.env.REACT_APP_FALLBACK_MODE.toLowerCase === 'true'
        ? require(`../api/fallbackData/getPostsByCategoryId_${id}.json`)
        : [],
  });
};

export const useCategoryInsert = () => {
  return useMutation({
    mutationFn: insertCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllCategories'] });
    },
  });
};
