import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem  : [],
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
