import { api } from 'services/api';

const getAllProducts = async () => {
  const res = await api.get('/products');
  return res.data.data;
};

const getSingleProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data.data;
};

export { getAllProducts, getSingleProduct };
