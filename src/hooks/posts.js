import { deletePost, editPost, getAllPosts, getPost, insertPost, ratePost } from '../api/posts';
import { useMutation, useQuery } from 'react-query';

import { queryClient } from '../App';

export const useAllPostsQuery = () => {
  return useQuery({
    queryKey: 'getAllPosts',
    queryFn: getAllPosts,
    initialData:
      process.env.REACT_APP_FALLBACK_MODE.toLowerCase() === 'true' ? require('../api/fallbackData/getPosts.json') : [],
  });
};

export const usePostQuery = (id) => {
  return useQuery({
    queryKey: ['getPost', id],
    queryFn: getPost,
    initialData:
      process.env.REACT_APP_FALLBACK_MODE.toLowerCase() === 'true'
        ? require(`../api/fallbackData/getPostsId_${id}.json`)
        : {},
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

export const useEditPost = () => {
  return useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllPosts'] });
      queryClient.invalidateQueries({ queryKey: ['getPost'] });
      alert('item was edited IN MUTATION');
    },

    onError: () => {
      console.log('Error then editing answer');
    },
  });
};

export const useRatePost = () => {
  return useMutation({
    mutationFn: ratePost,
    onSuccess: console.log('Rating updated'),
  });
};
