import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name        : 'cart',
  initialState: initialState,
  reducers    : {
    addItem: (state, action) => {
      state.cartItem = [...state.cartItem, action.payload];
    },
    // removeItem: (state, action) => {
    //   const newCartItem = state.cartItem.filter(
    //     (item) => item.id !== action.payload
    //   );
    //   state.cartItem = [...newCartItem];
    // },
    removeItem: (state, action) => {
      state.cartItem.splice(action.payload, 1);
    },
    // addItemQuantity: (state, action) => {
    //   let newItem = state.cartItem.map((item) => {
    //     if (item.id === action.payload) {
    //       let addQuantity = {
    //         ...item,
    //         quantity: item.quantity + 1,
    //       };
    //       return addQuantity;
    //     } else {
    //       return item;
    //     }
    //   });
    //   state.cartItem = [...newItem];
    // },
    addItemQuantity: (state, action) => {
      state.cartItem[action.payload].quantity += 1;
    },
    // minusItemQuantity: (state, action) => {
    //   let newItem = state.cartItem.map((item) => {
    //     if (item.id === action.payload) {
    //       let minusQuantity = {
    //         ...item,
    //         quantity: item.quantity - 1,
    //       };
    //       return minusQuantity;
    //     } else {
    //       return item;
    //     }
    //   });
    //   state.cartItem = [...newItem];
    // },
    minusItemQuantity: (state, action) => {
      state.cartItem[action.payload].quantity -= 1;
    },
    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const {
  addItem,
  addItemQuantity,
  removeItem,
  minusItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
