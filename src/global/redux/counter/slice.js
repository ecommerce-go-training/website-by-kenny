import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  initialState,
  name    : 'counter',
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

/* eslint-disable */
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
/* eslint-enable */
export default counterSlice.reducer;
