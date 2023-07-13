import { BASE_ADMIN_URL, BASE_PUBLIC_URL } from './baseApi';

import httpClient from './httpClient';

const PUBLIC_COMMENTS_URLS = {
  getComments: `${BASE_PUBLIC_URL}comments`,
  getCommentsByPostId: `${BASE_PUBLIC_URL}posts-comments/`,
  postComment: `${BASE_PUBLIC_URL}comments`,
};

const ADMIN_COMMENTS_URLS = {
  updateComment: `${BASE_ADMIN_URL}comments`,
  deleteComment: `${BASE_ADMIN_URL}comments/`,
};

export const getAllComments = () => {
  return httpClient.get(PUBLIC_COMMENTS_URLS.getComments).then((response) => {
    return response.data;
  });
};

export const getCommentsByPostId = ({ queryKey }) => {
  const id = queryKey[1];
  return httpClient.get(`${PUBLIC_COMMENTS_URLS.getCommentsByPostId}${id}`).then((response) => {
    return response.data;
  });
};

export const createComment = (comment) => {
  return httpClient.post(`${PUBLIC_COMMENTS_URLS.postComment}`, comment).then((response) => {
    return response.data;
  });
};
