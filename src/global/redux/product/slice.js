import { createSlice } from '@reduxjs/toolkit';
import { imageGenerator } from 'utils/helpers';

import { getProducts, getProduct } from './thunk';

const initialState = {
  productList    : [],
  currentProduct : [],
  displayProduct : [],
  searchProduct  : [],
  categoryProduct: [],
  filterProduct  : [],
  isLoading      : false,
  fetched        : false,
  isSearching    : false,
};

const productSlice = createSlice({
  name        : 'product',
  initialState: initialState,
  reducers    : {
    search: (state, action) => {
      state.searchProduct = state.productList.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.isSearching = true;
      state.displayProduct = [...state.searchProduct];
    },
    filterByCategory: (state, action) => {
      state.isSearching = false;
      state.categoryProduct = state.productList.filter((item) =>
        action.payload === 'sale'
          ? item.discount?.status
          : item.category?.name === action.payload
      );
      state.displayProduct = [...state.categoryProduct];
    },
    filterBySizeColor: (state, action) => {
      state.filterProduct = state[
        state.isSearching ? 'searchProduct' : 'categoryProduct'
      ]
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
      state.isSearching
        ? (state.displayProduct = [...state.searchProduct])
        : (state.displayProduct = [...state.categoryProduct]);
    },
    sortProduct: (state, action) => {
      switch (action.payload) {
      case 0:
        state.displayProduct.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        break;
      case 1:
        state.displayProduct.sort((a, b) => b.sold - a.sold);
        break;
      case 2:
        state.displayProduct.sort((a, b) => b.totalPrice - a.totalPrice);
        break;
      case 3:
        state.displayProduct.sort((a, b) => a.totalPrice - b.totalPrice);
        break;
      default:
        return;
      }
    },
    // temporary use only because theres no real img, delete once we have img from be
    resetProduct: (state) => {
      /*eslint-disable-next-line*/
			state = initialState;
    },
    addProductSoldItem: (state, action) => {
      const newList = state.productList.map((item) =>
        item.id === action?.payload?.id
          ? { ...item, sold: item.sold + action?.payload?.amount }
          : item
      );
      state.productList = [...newList];
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
				(item) =>
					(item = {
						...item,
						image: imageGenerator(),
						sold: item.inventories
							.map((invent) => invent?.detailInvoiceItems)
							.map((item) => item.map((item) => item.amount))
							.map((item) => item.reduce((item, sum) => item + sum, 0))
							.reduce((item, sum) => item + sum, 0),
						totalPrice:
							item.price - (item.price * item?.discount?.percent || 0) / 100,
					})
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
			const price = action?.payload?.data?.price;
			const percent = action?.payload?.data.discount?.percent || 0;
			const inventories = action?.payload?.data?.inventories;
			const sizeOrder = ['freesize', 'XS', 'S', 'M', 'L', 'XL'];
			state.currentProduct = {
				...action?.payload?.data,
				totalPrice: price - (price * percent) / 100,
				sizeColorList: {
					size: [...new Set(inventories.map((item) => item.size))].sort(
						(a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
					),
					color: [...new Set(inventories.map((item) => item.color))],
				},
			};
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
	addProductSoldItem,
} = productSlice.actions;
export default productSlice.reducer;
