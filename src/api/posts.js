import axios from 'axios';
import { BASE_PUBLIC_URL, BASE_ADMIN_URL } from './baseApi';

const PUBLIC_URLS = {
  getAll: `${BASE_PUBLIC_URL}posts`,
  getOne: `${BASE_PUBLIC_URL}posts/`,
  rate: `${BASE_PUBLIC_URL}posts-rate/`,
};

const ADMIN_URLS = {
  insert: `${BASE_ADMIN_URL}posts`,
  update: `${BASE_ADMIN_URL}posts/`,
  delete: `${BASE_ADMIN_URL}posts/`,
};

export const getAllPosts = () => {
  console.log('START getAllPosts');
  console.log(PUBLIC_URLS.getAll);
  return axios.get(PUBLIC_URLS.getAll).then((response) => {
    console.log('SUCCESS getAllPosts');
    console.log(response.data);
    return response.data;
  });
};

export const getPost = ({ queryKey }) => {
  const id = queryKey[1];
  console.log(`START getPost ${id}`);
  console.log(`${PUBLIC_URLS.getOne}${id}`);
  return axios.get(`${PUBLIC_URLS.getOne}${id}`).then((response) => {
    console.log('SUCCESS getPost');
    console.log(response.data);
    return response.data;
  });
};

export const insertPost = (post) => {
  console.log(`START insertPost`);
  console.log(`${ADMIN_URLS.insert}`);
  return axios.post(`${ADMIN_URLS.insert}`, post).then((response) => {
    console.log('SUCCESS insertPost');
    console.log(response.data);
    return response.data;
  });
};
