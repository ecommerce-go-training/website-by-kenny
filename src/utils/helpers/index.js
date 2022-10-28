import { toast } from 'react-toastify';

const saveLoginToken = (token) => localStorage.setItem('token', token);

const removeLoginToken = () => localStorage.removeItem('token');

const formatCurrency = (number) => {
  const currency = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style   : 'currency',
  });
  return currency.format(number);
};

const showNoti = (type, message) => toast?.[type](message);

export { formatCurrency, removeLoginToken, saveLoginToken, showNoti };
