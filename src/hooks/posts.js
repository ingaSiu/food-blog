import { deletePost, getAllPosts, getPost, insertPost } from '../api/posts';
import { useMutation, useQuery } from 'react-query';

import { queryClient } from '../App';

export const useAllPostsQuery = () => {
  return useQuery({
    queryKey: 'getAllPosts',
    queryFn: getAllPosts,
    initialData: process.env.REACT_APP_FALLBACK_MODE ? require('../api/fallbackData/getPosts.json') : [],
  });
};

export const usePostQuery = (id) => {
  return useQuery({
    queryKey: ['getPost', id],
    queryFn: getPost,
    initialData: process.env.REACT_APP_FALLBACK_MODE ? require(`../api/fallbackData/getPostsId_${id}.json`) : {},
  });
};

export const usePostInsert = () => {
  return useMutation({
    mutationFn: insertPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllPosts'] });
    },
  });
};

export const useDeletePost = () => {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllPosts'] });
      queryClient.invalidateQueries({ queryKey: ['getPost'] });
      alert('item was deleted IN MUTATION');
    },
  });
};
