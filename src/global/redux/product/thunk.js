import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllProducts, getSingleProduct } from './request';

const getProducts = createAsyncThunk('product/get-all-products', async () => {
  const res = await getAllProducts();
  return {
    status: true,
    data  : res,
  };
});

const getProduct = createAsyncThunk(
  'product/get-single-product',
  async (id) => {
    const res = await getSingleProduct(id);
    return {
      status: true,
      data  : res,
    };
  }
);

export { getProduct, getProducts };
