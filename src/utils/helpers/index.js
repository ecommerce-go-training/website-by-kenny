import { toast } from 'react-toastify';
import { StorageKey } from 'utils/constants';

const saveLoginToken = (token) =>
  localStorage.setItem(StorageKey.accessToken, token);

const removeLoginToken = () => localStorage.removeItem(StorageKey.accessToken);

const formatCurrency = (currencyUnit, number) => {
  const currency = new Intl.NumberFormat(undefined, {
    currency: currencyUnit,
    style   : 'currency',
  });
  return currency.format(number);
};

const showNoti = (type, message, position = 'top-right') =>
  toast?.[type](message, { containerId: position });

export { formatCurrency, removeLoginToken, saveLoginToken, showNoti };
