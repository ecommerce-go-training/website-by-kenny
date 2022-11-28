import { api } from 'services/api';

const verifyCoupon = async (data) => {
  const { code } = data;

  const body = {
    code,
  };

  const res = await api.post('/codes/verifies-coupon', body);

  return res.data.data;
};

const createInvoice = async (data) => {
  const {
    email,
    firstName,
    lastName,
    street,
    city,
    country,
    postalCode,
    phoneNumber,
    discountCode,
    detailItems,
    total,
  } = data;

  const body = {
    email,
    firstName,
    lastName,
    street,
    city,
    country,
    postalCode,
    total,
    phoneNumber,
    discountCode,
    detailItems,
  };

  const res = await api.post('/invoices', body);

  return res.data.data;
};

const getInvoices = async () => {
  const res = await api.get('/invoices');
  return res.data.data;
};

export { createInvoice, getInvoices, verifyCoupon };
