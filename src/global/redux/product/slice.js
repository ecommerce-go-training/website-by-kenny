import { createSlice } from '@reduxjs/toolkit';
import { imageGenerator } from 'utils/helpers';

import { getProducts, getProduct } from './thunk';

const initialState = {
  productList   : [],
  currentProduct: [],
  isLoading     : false,
  fetched       : false,
};

const productSlice = createSlice({
  name         : 'product',
  initialState : initialState,
  reducers     : {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fetched = true;
      /* eslint-disable */
			state.productList = action?.payload?.data.map(
				(item) => (item = { ...item, image: imageGenerator() })
			);
		},
		[getProducts.rejected]: (state) => {
			state.isLoading = false;
		},
		[getProduct.pending]: (state) => {
			state.isLoading = true;
		},
		[getProduct.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.currentProduct = action?.payload?.data;
		},
		[getProduct.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default productSlice.reducer;
