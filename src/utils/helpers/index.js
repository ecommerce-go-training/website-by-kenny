import { toast } from 'react-toastify';

const saveLoginToken = (token) => {
  localStorage.setItem('token', token);
};

const removeLoginToken = () => {
  localStorage.removeItem('token');
};

const formatCurrency = (number) => {
  const currency = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style   : 'currency',
  });
  return currency.format(number);
};

const showErrorNoti = (message) => toast.error(message);
const showSuccessNoti = (message) => toast.success(message);

export {
  formatCurrency,
  removeLoginToken,
  saveLoginToken,
  showErrorNoti,
  showSuccessNoti,
};
