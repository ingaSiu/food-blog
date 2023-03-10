import { BASE_PUBLIC_URL } from './baseApi';
import httpClient from './httpClient';

const ADMIN_LOGIN_URL = `${BASE_PUBLIC_URL}admin`;

export const adminLogin = (loginObj) => {
  return httpClient.post(ADMIN_LOGIN_URL, loginObj).then((response) => {
    return alert('logged in httpClient');
  });
};
