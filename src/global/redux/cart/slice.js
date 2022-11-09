import { createSlice } from '@reduxjs/toolkit';

import { backDress, whiteDress, greenDress, orangeDress } from 'assets/images';

const initialState = {
  cartItem: [
    {
      id      : 1,
      image   : backDress,
      name    : 'Back Dress',
      size    : 'M',
      price   : 1230,
      quantity: 1,
    },
    {
      id      : 2,
      image   : greenDress,
      name    : 'Green Dress',
      size    : 'S',
      price   : 12320,
      quantity: 3,
    },
    {
      id      : 3,
      image   : whiteDress,
      name    : 'White Dress',
      size    : 'XL',
      price   : 130,
      quantity: 6,
    },
    {
      id      : 4,
      image   : orangeDress,
      name    : 'Orange Dress',
      size    : 'XXL',
      price   : 45,
      quantity: 3,
    },
  ],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name        : 'cart',
  initialState: initialState,
  reducers    : {
    addItemToCart: (state, action) => {
      state.cartItem = action.payload;
    },
    removeItem: (state, action) => {
      const newCartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.cartItem = newCartItem;
    },
    addItemQuantity: (state, action) => {
      let newItem = state.cartItem.map((item) => {
        if (item.id === action.payload) {
          let addQuantity = {
            ...item,
            quantity: item.quantity + 1,
          };
          return addQuantity;
        } else {
          return item;
        }
      });
      state.cartItem = newItem;
    },
    minusItemQuantity: (state, action) => {
      let newItem = state.cartItem.map((item) => {
        if (item.id === action.payload) {
          let minusQuantity = {
            ...item,
            quantity: item.quantity - 1,
          };
          return minusQuantity;
        } else {
          return item;
        }
      });
      state.cartItem = newItem;
    },
  },
});

export const { addItemToCart, addItemQuantity, removeItem, minusItemQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
