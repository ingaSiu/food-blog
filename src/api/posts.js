import { BASE_ADMIN_URL, BASE_PUBLIC_URL } from './baseApi';

import httpClient from './httpClient';

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
  return httpClient.get(PUBLIC_URLS.getAll).then((response) => {
    return response.data;
  });
};

export const getPost = ({ queryKey }) => {
  const id = queryKey[1];
  console.log(`START getPost ${id}`);
  console.log(`${PUBLIC_URLS.getOne}${id}`);
  return httpClient.get(`${PUBLIC_URLS.getOne}${id}`).then((response) => {
    console.log('SUCCESS getPost');
    console.log(response.data);
    return response.data;
  });
};

export const insertPost = (post) => {
  console.log(`START insertPost`);
  console.log(`${ADMIN_URLS.insert}`);
  return httpClient.post(`${ADMIN_URLS.insert}`, post).then((response) => {
    console.log('SUCCESS insertPost');
    console.log(response.data);
    return response.data;
  });
};

export const deletePost = (id) => {
  return httpClient.delete(`${ADMIN_URLS.delete}${id}`).then((response) => {
    return alert('item was deleted IN httpClient');
  });
};

export const editPost = ({ id, post }) => {
  return httpClient.put(`${ADMIN_URLS.update}${id}`, post).then((response) => {
    return console.log('Post was edited');
  });
};

export const ratePost = ({ id, stars }) => {
  console.log('stars in api: ' + stars);
  return httpClient.put(`${PUBLIC_URLS.rate}${id}`, { rating: stars }).then((response) => {
    return response.data;
  });
};
