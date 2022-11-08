import { createSlice } from '@reduxjs/toolkit';
import { imageGenerator } from 'utils/helpers';

import { getProducts, getProduct } from './thunk';

const initialState = {
  productList   : [],
  currentProduct: [],
  searchProduct : [],
  isLoading     : false,
  fetched       : false,
};

const productSlice = createSlice({
  name        : 'product',
  initialState: initialState,
  reducers    : {
    search: (state, action) => {
      state.searchProduct = state.productList.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    resetProduct: (state) => {
      state.fetched = false;
      state.productList = [];
      state.currentProduct = [];
      state.searchProduct = [];
    },
  },
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

export const { search, resetProduct } = productSlice.actions;
export default productSlice.reducer;
