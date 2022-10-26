import { api } from 'services/api';

const getProductData = async () => {
  try {
    return await api.get('/products');
  } catch (error) {
    console.log(error);
  }
};

export { getProductData };
