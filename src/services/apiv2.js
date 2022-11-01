import axios from 'axios';
import Env from 'config/env';
import { StorageKey, ValidApiStatus } from 'utils/constants';
/**
 * Instance information structure
 * @structure {
 * name: string,
 * secure: bool
 * baseURL: string
 * headers: object
 * }
 */
const instancesInfo = [
  {
    name   : 'api',
    secure : true,
    baseURL: Env.API_URL,
    headers: {},
  },
];

const controller = new AbortController();

const createInstance = ({ baseURL, headers, secure }) => {
  const instance = axios.create({
    baseURL,
    headers: {
      ...headers,
      Accept        : 'application/json',
      'Content-Type': 'application/json',
    },
  });
  instance.interceptors.request.use(
    async (config) => {
      if (secure) {
        const authToken = localStorage.getItem(StorageKey.accessToken);
        if (authToken) {
          config.headers.common.Authorization = `Bearer ${authToken}`;
        }
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      if (ValidApiStatus.includes(response.status)) {
        console.log('verified');
        return response;
      } else {
        controller.abort();
      }
    },
    ({ message, response: { data, status } }) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ message, data, status });
    }
  );
  return instance;
};

const instances = instancesInfo.reduce((obj, instanceInfo) => {
  const key = instanceInfo.name;
  obj[key] = createInstance(instanceInfo);
  return obj;
}, {});

export const { api } = instances;
