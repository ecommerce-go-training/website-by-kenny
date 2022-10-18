import axios from 'axios';
import Env from 'config/env';

const api = axios.create({
  baseURL: Env.API_URL,
});

const authApi = axios.create({
  baseURL: Env.API_URL,
  headers: {
    accessToken: 'conbocuoi',
  },
});

authApi.interceptors.request.use(
  (config) => config,
  (error) => error
);

authApi.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 404) {
      window.location.href = '/sign-in';
    }
  }
);

export { api, authApi };
