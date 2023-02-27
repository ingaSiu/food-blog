import axios from 'axios';
import { BASE_PUBLIC_URL, BASE_ADMIN_URL } from './baseApi';

const PUBLIC_COMMENTS_URLS = {
  getComments: `${BASE_PUBLIC_URL}comments`,
  getCommentsByPostId: `${BASE_PUBLIC_URL}post-comments/:id`,
  postComment: `${BASE_PUBLIC_URL}comments`,
};

const ADMIN_COMMENTS_URLS = {
  updateComment: `${BASE_ADMIN_URL}comments`,
  deleteComment: `${BASE_ADMIN_URL}comments/:id`,
};

export const getAllComments = () => {
  return axios.get(PUBLIC_COMMENTS_URLS.getComments).then((response) => {
    return response.data;
  });
};

export const createComment = (comment) => {
  return axios.post(`${PUBLIC_COMMENTS_URLS.postComment}`, comment).then((response) => {
    return response.data;
  });
};
