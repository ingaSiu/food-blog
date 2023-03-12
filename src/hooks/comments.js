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
  return useQuery({
    queryKey: ['getCommentsByPostId', id],
    queryFn: getCommentsByPostId,
    initialData:
      process.env.REACT_APP_FALLBACK_MODE.toLowerCase === 'true'
        ? require(`../api/fallbackData/getCommentsByPostId_${id}.json`)
        : [],
  });
};
