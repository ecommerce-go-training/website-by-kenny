import { useEffect, useRef } from 'react';
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

const useClickOutside = (toggle) => {
  let ref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!ref?.current?.contains(event?.target)) {
        toggle();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return ref;
};

export {
  formatCurrency,
  getLoginToken,
  imageGenerator,
  modifyLocalStorage,
  removeLoginToken,
  saveLoginToken,
  showNoti,
  useClickOutside,
};
