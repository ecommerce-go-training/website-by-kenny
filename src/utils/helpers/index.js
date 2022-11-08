import { toast } from 'react-toastify';
import { StorageKey } from 'utils/constants';
import { imageList } from 'utils/constants';

const saveLoginToken = (token) =>
  localStorage.setItem(StorageKey.accessToken, token);

const getLoginToken = () => localStorage.getItem(StorageKey.accessToken);

const removeLoginToken = () => localStorage.removeItem(StorageKey.accessToken);

const modifyLocalStorage = (
  type = 'setItem' | 'getItem' | 'removeItem',
  key,
  value
) => localStorage[type](key, value);

const formatCurrency = (unit, value) => {
  const currency = new Intl.NumberFormat(undefined, {
    currency: unit,
    style   : 'currency',
  });
  return currency.format(value);
};

const showNoti = (type, message, position = 'top-right') =>
  toast?.[type](message, { containerId: position });

const imageGenerator = () => {
  return imageList[Math.floor(Math.random() * imageList.length)];
};

export {
  formatCurrency,
  getLoginToken,
  imageGenerator,
  modifyLocalStorage,
  removeLoginToken,
  saveLoginToken,
  showNoti,
};
