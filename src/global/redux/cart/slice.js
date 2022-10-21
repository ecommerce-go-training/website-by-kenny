import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem  : [],
  totalPrice: 0,
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
      return {
        ...state,
        cartItem: action.payload,
      };
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice;
