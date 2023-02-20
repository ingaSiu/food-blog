import { useQuery, useMutation } from 'react-query';
import { queryClient } from '../App';
import { getAllPosts, getPost, insertPost, deletePost } from '../api/posts';

export const useAllPostsQuery = () => {
  return useQuery('getAllPosts', getAllPosts);
};

export const usePostQuery = (id) => {
  return useQuery(['getPost', id], getPost);
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
