import { createSlice } from '@reduxjs/toolkit';
import { imageGenerator } from 'utils/helpers';

import { getProducts, getProduct } from './thunk';

const initialState = {
  productList    : [],
  currentProduct : [],
  displayProduct : [],
  categoryProduct: [],
  filterProduct  : [],
  sortProduct    : [],
  isLoading      : false,
  fetched        : false,
};

const productSlice = createSlice({
  name        : 'product',
  initialState: initialState,
  reducers    : {
    search: (state, action) => {
      state.displayProduct = state.productList.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByCategory: (state, action) => {
      state.filterProduct = [];
      state.categoryProduct = state.productList.filter((item) =>
        action.payload === 'sale'
          ? item.discount?.status
          : item.category?.name === action.payload
      );
      state.displayProduct = [...state.categoryProduct];
    },
    filterBySizeColor: (state, action) => {
      state.filterProduct = state.categoryProduct
        .map((item) => {
          return {
            ...item,
            inventories: item.inventories.filter(
              (item) =>
                action.payload.color.includes(item.color) ||
								action.payload.size.includes(item.size)
            ),
          };
        })
        .filter((item) => item.inventories.length !== 0);
      state.displayProduct = [...state.filterProduct];
    },
    clearFilter: (state) => {
      state.displayProduct = [...state.categoryProduct];
    },
    sortProduct: (state) => {
      console.log(state.displayProduct);
    },
    // temporary use only because theres no real img, delete once we have img from be
    resetProduct: (state) => {
      /*eslint-disable-next-line*/
			state = initialState;
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

export const {
	clearFilter,
	search,
	resetProduct,
	filterByCategory,
	filterBySizeColor,
	sortProduct,
} = productSlice.actions;
export default productSlice.reducer;
