import axios from 'axios';
import { BASE_PUBLIC_URL } from './baseApi';

const ADMIN_LOGIN_URL = `${BASE_PUBLIC_URL}admin`;

export const adminLogin = (loginObj) => {
  return axios.post(ADMIN_LOGIN_URL, loginObj).then((response) => {
    return response.data;
  });
};
