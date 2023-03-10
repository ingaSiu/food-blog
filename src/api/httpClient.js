import axios from 'axios';

const httpClient = () => {
  // Create instance
  let instance = axios.create();

  // Set the AUTH token for any request
  const adminToken = localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : null;
  const token = adminToken ? adminToken : process.env.REACT_APP_USER_TOKEN;
  instance.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  return instance;
};

export default httpClient();
