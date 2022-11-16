import { createSlice } from '@reduxjs/toolkit';

import { verifyUserCoupon } from './thunk';

const initialState = {
  couponInfo: [],
  isLoading : false,
};

const checkoutSlice = createSlice({
  name         : 'checkout',
  initialState : initialState,
  reducers     : {},
  extraReducers: {
    [verifyUserCoupon.pending]: (state) => {
      state.isLoading = true;
    },
    [verifyUserCoupon.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.couponInfo = action.payload;
    },
    [verifyUserCoupon.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default checkoutSlice.reducer;
