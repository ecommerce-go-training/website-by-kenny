import { api } from 'services/api';

const verifyCoupon = async (data) => {
  const { code } = data;

  const body = {
    code,
  };

  const res = await api.post('/codes/verifies-coupon', body);

  return res.data.data;
};

export { verifyCoupon };
