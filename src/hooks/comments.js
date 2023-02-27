import { useQuery, useMutation } from 'react-query';
import { getAllComments, createComment } from '../api/comments';

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
