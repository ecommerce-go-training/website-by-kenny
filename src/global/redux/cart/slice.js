import { createSlice } from '@reduxjs/toolkit';

import { backDress, whiteDress, greenDress, orangeDress } from 'assets/images';

const initialState = {
  cartItem: [
    {
      image   : backDress,
      name    : 'Back Dress',
      size    : 'M',
      price   : 1230,
      quantity: 1,
    },
    {
      image   : greenDress,
      name    : 'Green Dress',
      size    : 'S',
      price   : 12320,
      quantity: 3,
    },
    {
      image   : whiteDress,
      name    : 'White Dress',
      size    : 'XL',
      price   : 130,
      quantity: 6,
    },
    {
      image   : orangeDress,
      name    : 'Orange Dress',
      size    : 'XXL',
      price   : 45,
      quantity: 3,
    },
  ],
};

const cartSlice = createSlice({
  name        : 'cart',
  initialState: initialState,
  reducers    : {
    addItem: (state, action) => {
      return {
        ...state,
        cartItem: action.payload,
      };
    },
    removeItem: (state, action) => {
      console.log('remove item');
      const newCartItem = [...state.cartItem];
      newCartItem.splice(action.payload, 1);
      return {
        ...state,
        cartItem: newCartItem,
      };
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
