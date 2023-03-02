import { createComment, getAllComments, getCommentsByPostId } from '../api/comments';
import { useMutation, useQuery } from 'react-query';

export const useCommentsQuery = () => {
  return useQuery('getComments', getAllComments);
};

export const useCreateComment = () => {
  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      console.log('comment created');
    },
    onError: () => {
      console.log('comment error');
    },
  });
};

export const useGetCommentsByPostId = (id) => {
  return useQuery(['getCommentsByPostId', id], getCommentsByPostId);
};
