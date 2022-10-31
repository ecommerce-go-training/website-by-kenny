import axios from 'axios';
import Env from 'config/env';
import { StorageKey } from 'utils/constants';

const apiList = [
  {
    name   : 'baseApi',
    secure : true,
    baseURL: Env.API_URL,
    Headers: {},
  },
  {
    name   : 'authApi',
    secure : true,
    baseURL: Env.API_URL,
    Headers: {},
  },
];

const axiosInstance = ({ baseURL, headers, secure }) => {
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      ...headers,
      Accept        : 'application/json',
      'Content-Type': 'application/json,',
    },
    withCredentials: secure,
  });

  instance.interceptors.request.use(
    async (config) => {
      if (secure) {
        const authToken = localStorage.getItem(StorageKey.authToken);

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    ({ message, response: { data, status } }) =>
    // eslint-disable-next-line prefer-promise-reject-errors
      Promise.reject({ message, data, status })
  );

  return instance;
};

const instances = apiList.reduce((obj, api) => {
  const key = api.name;
  obj[key] = axiosInstance(api);
  return obj;
}, {});

export const { api } = instances;
