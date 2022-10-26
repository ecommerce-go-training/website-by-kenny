import axios from 'axios';
import Env from 'config/env';

const api = axios.create({
  baseURL: Env.API_URL,
  headers: {
    Accept        : 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  ({ message, response: { data, status } }) =>
  // eslint-disable-next-line prefer-promise-reject-errors
    Promise.reject({ message, data, status })
);

export { api };
